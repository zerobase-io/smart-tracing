import { readFileSync } from 'fs';

const devices = require('puppeteer/DeviceDescriptors');

const iPhonex = devices['iPhone X'];

const re = new RegExp(/path: '(?<name>.*)',/ig);
const router = readFileSync('src/router.js').toString('utf-8');
let matches;

const paths = [];

// Build the list of routes to test
// eslint-disable-next-line no-cond-assign
while ((matches = re.exec(router)) !== null) {
  const path = matches[1];
  // TODO: find a workaround not to ignore "/scan": https://github.com/puppeteer/puppeteer/issues/4404
  if (path !== '/s/*' && path !== '*' && path !== '/scan') {
    paths.push(path);
  }
}

describe('Zerobase - Mobile - Smoke Test All Routes', () => {
  beforeAll(async () => {
    jest.setTimeout(60000);
    if (global.eyes) {
      await eyes.open('Zerobase', 'Routes Visual Smoke Test');
    }
  });

  // beforeEach(async () => {
  //   page = browser.newPage();
  // });

  afterAll(async () => {
    if (global.eyes && eyes.getIsOpen()) {
      await eyes.close();
    }
  });

  test.each(paths)('Sanity - %p', async (path) => {
    await page.emulate(iPhonex);
    // TODO: Respect environment
    await page.goto(`http://localhost:8080${path}`, { waitUntil: 'networkidle2' });

    const fullPageScreenshotHack = readFileSync(`${__dirname}/../../utils/fullPageScreenshot.js`).toString('utf-8');
    await page.evaluate(fullPageScreenshotHack);

    const img = await page.screenshot({ path: `${__dirname}/../../screenshots//mobile-smoke-${path.split('/').join('')}.jpg`, fullPage: true });
    if (global.eyes) {
      await eyes.checkImage(img, `${path}`);
    }
  });
});
