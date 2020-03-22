const minify = require('@node-minify/core');
const uglifyJS = require('@node-minify/uglify-js');
const gcc = require('@node-minify/google-closure-compiler');
const ts = require('typescript');
const fs = require('fs');
const pug = require('pug');

const transpileToJavascript = () =>
  new Promise((resolve, reject) => {
    const tsConfig = fs.readFileSync(__dirname + '/tsconfig.json');
    const program = ts.createProgram(['src/controller.ts'], JSON.parse(tsConfig).compilerOptions);

    program.emit(undefined, (fileName, data) => {
      // hack to remove exports definition which breaks the build
      data = data.replace(`Object.defineProperty(exports, "__esModule", { value: true });`, '');
      fs.writeFile(`${__dirname}/public/controller.js`, data, function(err) {
        if (err) {
          reject(err);
        }
        console.log(`Javascript transpiled for ${fileName}`);
        resolve();
      });
    });
  });

const minifyJs = () => {
  minify({
    // compress the custom js files (controller, router global functions)
    // gcc compression usually has some issues with larger libraries
    compressor: gcc,
    options: {
      compilation_level: 'ADVANCED',
      externs: [__dirname + '/build-externs/jquery-3.3.js'],
    },
    input: [__dirname + '/public/controller.js'],
    output: __dirname + '/public/controller.min.js',
    type: 'js',
    sync: true,
    callback: function(err, value) {
      if (err != null) {
        console.log('error minifying controller.js', err);
      }

      minify({
        // compress the rest of the files
        compressor: uglifyJS,
        input: [
          __dirname + '/public/vendor/jquery/dist/jquery.min.js',
          __dirname + '/public/vendor/bootstrap/dist/js/bootstrap.bundle.min-1582732176.js',
          __dirname + '/public/vendor/qrcodejs/qrcode.min.js',
          __dirname + '/public/vendor/jsQR/jsQR.js',
          __dirname + '/public/vendor/jsbarcode/script.min.js',
          __dirname + '/public/vendor/howler/howler.core.min.js',
          __dirname + '/public/vendor/slick/slick.min.js',
          __dirname + '/public/vendor/fingerprint/fingerprint2.js',
          __dirname + '/public/vendor/imask/dist/imask.min-1582732176.js',
          __dirname + '/public/assets/js/tabler.min-1582732176.js',
          __dirname + '/public/controller.min.js',
        ],
        output: __dirname + '/public/main.min.js',
        type: 'js',
        sync: true,
        callback: function(err, value) {
          if (err) {
            console.log(err);
          }
          console.log('Javascript Files Concated and Minifed');
          //console.log('sync 2', value);
        },
      });
    },
  });
};

const minifyCss = () => {
  const uglifycss = require('uglifycss');
  const uglified = uglifycss.processFiles(
    [
      __dirname + '/public/vendor/jqvmap/dist/jqvmap.min-1582732176.css',
      __dirname + '/public/vendor/selectize/dist/css/selectize-1582732176.css',
      __dirname + '/public/vendor/fullcalendar/core/main.min-1582732176.css',
      __dirname + '/public/vendor/fullcalendar/daygrid/main.min-1582732176.css',
      __dirname + '/public/vendor/fullcalendar/timegrid/main.min-1582732176.css',
      __dirname + '/public/vendor/fullcalendar/list/main.min-1582732176.css',
      __dirname + '/public/vendor/flatpickr/dist/flatpickr.min-1582732176.css',
      __dirname + '/public/vendor/nouislider/distribute/nouislider.min-1582732176.css',
      __dirname + '/public/vendor/mapbox/styles.css',
      //-Zerobase Core
      __dirname + '/public/assets/css/tabler.min-1582732176.css',
      __dirname + '/public/assets/css/icons.css',
      //-Zerobase Plugins
      __dirname + '/public/assets/css/tabler-flags.min-1582732176.css',
      __dirname + '/public/assets/css/tabler-payments.min-1582732176.css',
      __dirname + '/public/assets/css/tabler-buttons.min-1582732176.css',
      __dirname + '/public/assets/css/demo.min-1582732176.css',
      __dirname + '/public/vendor/scan-animation/style.css',
      __dirname + '/public/vendor/slick/slick.css',
      __dirname + '/public/vendor/slick/slick.css',
      __dirname + '/public/vendor/slick/slick-theme.css',
      __dirname + '/public/overrides.css',
    ],
    { maxLineLen: 500, expandVars: true },
  );

  fs.writeFile(__dirname + '/public/styles.min.css', uglified, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('CSS Files Concated and Minified');
  });
};

// Environment variables should be prefixed with the following prefix
// Example: RUNTIME_API_HOST will inject API_HOST into the runtime config
const PREFIX = 'RUNTIME_';
const environmentVarsToJSON = () => {
  const config = {};

  Object.entries(process.env).forEach(([name, value]) => {
    if (name.startsWith(PREFIX)) {
      config[name.slice(PREFIX.length)] = value;
    }
  });

  return JSON.stringify(config);
};

const convertPugtoHTML = () => {
  var html = pug.renderFile(__dirname + '/src/templates/views/index.pug');

  const runtimeConfig = environmentVarsToJSON();
  console.log({ runtimeConfig });

  // Replace runtime config with environment variables
  html = html.replace('{{ RUNTIME_CONFIG }}', runtimeConfig);

  fs.writeFile(__dirname + '/public/index.html', html, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('HTML generated from Pug file');
  });
};

transpileToJavascript()
  .then(() => {
    minifyJs();
    minifyCss();
    convertPugtoHTML();
  })
  .catch(console.log);
