export default class RegisterBusinessPage {
  constructor() {
    this.selectors = {
      enrollButton: '.mt-6 a#register-business',
      registrationForm: 'form.register-business',
      businessName: 'input[name=org_name]',
      businessAddress: 'input[name=org_place]',
      businessType: 'select[name=type]',
      businessContactName: 'input[name=contact_name]',
      businessContactEmail: 'input[name=email]',
      businessContactPhone: 'input[name=phone]',
      submitButton: 'button[id=submit-business]',
      submitButtonDisabled: 'button[id=submit-business][disabled=disabled]',
      privacyTermsCheckbox: 'input[id=submit-business-agree]',
      alertSuccess: '.alert-success',
      alertWarning: '.alert-warning',
      alertPrivacyWarning: 'div[id=submit-business-warning]',
      alertPhoneValidationWarning: '.card-body .alert.alert-warning', // TODO: add unique ID for this div
    };
  }

  async enroll() {
    await page.waitForSelector(this.selectors.enrollButton);
    await page.$eval(this.selectors.enrollButton, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });
    // await page.$eval(this.selectors.enrollButton, (el) => el.scrollIntoView())
    // await page.focus(this.selectors.enrollButton)
    // await page.screenshot({ path: './registration.jpg', type: 'jpeg' })
    // await page.screenshot({ path: './registration-full.jpg', type: 'jpeg', fullPage: true })
    await page.waitFor(2000);
    await page.click(this.selectors.enrollButton);
  }

  async waitForRegistrationForm() {
    await page.waitForSelector(this.selectors.registrationForm);
    await page.$eval(this.selectors.registrationForm, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });
    await page.waitFor(2000);
    await page.focus(this.selectors.registrationForm);
  }

  async enterBusinessInfo(data) {
    await page.waitForSelector(this.selectors.businessName);
    await page.click(this.selectors.businessName);
    await page.keyboard.type(data.name);

    await page.waitForSelector(this.selectors.businessAddress);
    await page.click(this.selectors.businessAddress);
    await page.keyboard.type(data.address);
  }

  async selectBusinessType(type) {
    // TODO: throw if using an invalid type
    // eslint-disable-next-line max-len
    // const validTypes = ['BUSINESS/OTHER', 'BUSINESS/GROCERY', 'BUSINESS/RESTAURANT', 'FINANCIAL/BANK'];
    await page.select(this.selectors.businessType, type);
  }

  async enterContactInformation(data) {
    await page.waitForSelector(this.selectors.businessContactName);
    await page.click(this.selectors.businessContactName);
    await page.keyboard.type(data.name);

    await page.waitForSelector(this.selectors.businessContactEmail);
    await page.click(this.selectors.businessContactEmail);
    await page.keyboard.type(data.email);

    await page.waitForSelector(this.selectors.businessContactPhone);
    await page.click(this.selectors.businessContactPhone);
    await page.keyboard.type(data.phone);
  }

  async verifyPrivacyWarning() {
    await page.waitForSelector(this.selectors.alertPrivacyWarning, {
      visible: true,
    });
    await page.$eval(this.selectors.alertPrivacyWarning, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });

    await expect(page).toMatchElement(this.selectors.alertPrivacyWarning, {
      text: 'Please accept the privacy policy before continuing.',
    });
  }

  async verifyPhoneValidationWarning() {
    // TODO: update with unique ID
    await page.waitForSelector(this.selectors.alertPhoneValidationWarning, {
      visible: true,
    });
    await page.waitForSelector(this.selectors.alertPhoneValidationWarning);
    await page.$eval(this.selectors.alertPhoneValidationWarning, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });

    await expect(page).toMatchElement(
      this.selectors.alertPhoneValidationWarning,
      {
        text:
          'Some of your information could not be verified, please try again',
      },
    );
  }

  async acceptPrivacyTerms() {
    await page.click(this.selectors.privacyTermsCheckbox);
  }

  async submit() {
    // await page.keyboard.press("Enter")
    await page.waitForSelector(this.selectors.submitButton, { visible: true });
    await page.$eval(this.selectors.alertSuccess, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });
    await page.waitFor(2000);
    await page.focus(this.selectors.submitButton);
    await page.waitFor(2000);
    await page.click(this.selectors.submitButton);
    // await page.waitForNavigation();
  }

  async verifySuccess() {
    await page.waitForSelector(this.selectors.alertSuccess, { visible: true });
    await page.waitForSelector(this.selectors.alertSuccess);
    await page.$eval(this.selectors.alertSuccess, (e) => {
      e.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    });
  }
}
