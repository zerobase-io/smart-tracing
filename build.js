const { transpileToJavascript, minifyJs, minifyCss, convertPugtoHTML } = require('./buildUtils');

transpileToJavascript()
  .then(() => {
    minifyJs();
    minifyCss();
    convertPugtoHTML();
  })
  .catch(console.log);
