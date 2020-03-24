/* Dev server rebuilds when pug templates or typescript files change */
const { transpileToJavascript, minifyJs, minifyCss, convertPugtoHTML } = require('./buildUtils');

const watch = require('node-watch');
const fs = require('fs');
const express = require('express');
const inquirer = require('inquirer');
const _ = require('lodash');

const apiHosts = {
  Staging: 'https://zerobase-api-stage.herokuapp.com',
  Local: 'http://localhost:9000',
};

const promptForApiServer = () =>
  inquirer
    .prompt({
      name: 'API',
      type: 'list',
      message: 'Which API server do you want to use?',
      choices: _.map(apiHosts, (host, label) => ({ name: `${label} - ${host}`, value: host })),
    })
    .then(result => {
      // Override API host env var
      process.env.RUNTIME_API_HOST = result.API;
    });

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

promptForApiServer().then(() =>
  transpileToJavascript()
    .then(() => {
      console.log('Running dev server on port:', port);
      console.log(`Watching for file changes on ${srcDir}`);
      minifyJs(nonCompressor);
      minifyCss();
      convertPugtoHTML();
    })
    .catch(console.log),
);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.listen(port);

const srcDir = 'src';

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
