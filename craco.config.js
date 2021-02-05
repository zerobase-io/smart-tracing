const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        implementation: require("sass"),
        sassOptions: {
          includePaths: ["./src/styles"],
        },
        webpackImporter: false,
      },
    },
  },
};
