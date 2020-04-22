const PuppeteerEnvironment = require('jest-environment-puppeteer');
const Eyes = require('@applitools/eyes-images').Eyes;
// const path = require('path');

class CustomPuppeteerEnvironment extends PuppeteerEnvironment {
  constructor(config) {
    super(config);
    console.log('LOADED CustomPuppeteerEnvironment');
  }

  async setup() {
    await super.setup();
    // this.global.page.setViewport({ width: 1920, height: 1080});

    // const appName = require(path.join(process.cwd(), 'package.json')).name;
    const eyesApiKey = process.env.APPLITOOLS_API_KEY;
    if (eyesApiKey) {
      const eyes = new Eyes();
      eyes.setHostOS(process.platform);
      eyes.setApiKey(eyesApiKey);
      this.global.eyes = eyes;
    }
  }

  async teardown() {
    await super.teardown();
    if (this.global.eyes && this.global.eyes.getIsOpen()) {
      this.global.eyes.close();
    }
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomPuppeteerEnvironment;
