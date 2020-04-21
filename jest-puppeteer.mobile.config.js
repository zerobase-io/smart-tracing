console.log("LOADED jest-puppeteer.mobile.config.js");
const devices = require('puppeteer/DeviceDescriptors'); 
const iPhonex = devices['iPhone X'];  

module.exports = {
  launch: {
    dumpio: false,
    headless: process.env.HEADLESS !== 'false',
    sloMo: 1000,
    ignoreHTTPSErrors: true,
  }
}
