import { readFileSync } from 'fs';

const re = new RegExp(/path: '(?<name>.*)',/gi);
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

describe('Zerobase Desktop - Smoke Test All Routes', () => {
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

  test.each(paths)('Screenshot - %p', async (path) => {
    await page.setViewport({
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
    });

    // TODO: Respect environment

    await page.goto(`http://localhost:8080${path}`, {
      waitUntil: 'networkidle2',
    });

    // await page.waitForNavigation();

    const fullPageScreenshotHack = readFileSync(
      `${__dirname}/../../utils/fullPageScreenshot.js`,
    ).toString('utf-8');
    await page.evaluate(fullPageScreenshotHack);

    const img = await page.screenshot({
      path: `${__dirname}/../../screenshots/desktop-smoke-${path
        .split('/')
        .join('')}.png`,
      fullPage: true,
    });

    if (global.eyes) {
      await eyes.checkImage(img, `${path}`);
    }
  });
});
