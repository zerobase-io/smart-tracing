/* Dev server rebuilds when pug templates or typescript files change */
const { transpileToJavascript, minifyJs, minifyCss, convertPugtoHTML } = require('./buildUtils');

const watch = require('node-watch');
const fs = require('fs');
const express = require('express');

// Dummy compressor for local dev
const nonCompressor = ({ settings: { output, options }, content, callback }) => {
  // Append externs
  if (options.externs != null) {
    options.externs.forEach(fileName => {
      fs.appendFileSync(output, fileName);
    });
  }

  // Write output
  fs.writeFileSync(output, content);
  console.log('Compressed', output);
  callback && callback();
};

transpileToJavascript()
  .then(() => {
    minifyJs(nonCompressor);
    minifyCss();
    convertPugtoHTML();
  })
  .catch(console.log);

const app = express();
const port = process.env.PORT || 8080;

console.log('Running dev server on port:', port);

app.use(express.static(__dirname + '/public'));
app.listen(port);

const srcDir = 'src';

console.log(`Watching for file changes on ${srcDir}`);

watch(srcDir, { recursive: true }, (evt, fileName) => {
  console.log('Rebuilding due to change:', fileName);

  const fileExt = fileName.split('.').pop();

  if (fileExt === 'pug') {
    convertPugtoHTML();
  } else if (fileExt === 'ts') {
    transpileToJavascript()
      .then(() => {
        minifyJs(nonCompressor);
      })
      .catch(console.log);
  }
});
