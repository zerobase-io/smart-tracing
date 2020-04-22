export default class HomePage {
  constructor() {
    // TODO: Target different environments
    this.homePageURL = 'http://localhost:3000/';
    this.selectors = {
      dropdown: '.dropdown-toggle',
      dropdownActive: '.dropdown-menu.show',
      businessMenuItem: '#nav-item-business',
      healthcareMenuItem: '#nav-item-healthcare',
    };
  }

  async goTo() {
    await page.goto(this.homePageURL);
  }

  async openMenu() {
    await page.waitForSelector(this.selectors.dropdown);
    await page.click(this.selectors.dropdown);
    await page.waitForSelector(this.selectors.dropdownActive);
  }

  async selectBusiness() {
    await page.waitForSelector(this.selectors.businessMenuItem);
    await page.click(this.selectors.businessMenuItem, {
      waitUntil: 'domcontentloaded',
    });
    await page.waitFor(2000);
  }

  async selectHealthcare() {
    await page.waitForSelector(this.selectors.healthcareMenuItem);
    await page.click(this.selectors.healthcareMenuItem, {
      waitUntil: 'domcontentloaded',
    });
    await page.waitFor(2000);
  }
}
