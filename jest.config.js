console.log("LOADED jest.config.js");

module.exports = {
  "globalSetup": "jest-environment-puppeteer/setup",
  "globalTeardown": "jest-environment-puppeteer/teardown",
  "testEnvironment": "./jest-custom-environment.js",
  "testMatch": ["**/?(*.)+(spec|test).[j]s"],
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Report",
        "includeFailureMsg": true
    }],
    "jest-junit"
  ],
  "setupFilesAfterEnv": ["expect-puppeteer"]
}
