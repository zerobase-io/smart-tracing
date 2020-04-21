console.log("LOADED jest-puppeteer.config.js");

module.exports = {
  launch: {
    dumpio: false,
    headless: process.env.HEADLESS !== 'false',
    sloMo: 1000,
    ignoreHTTPSErrors: true,
    // defaultViewport: null
  }
}
