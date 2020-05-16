import expect from 'expect-puppeteer';

export default class RegisterHealthcarePage {
    constructor() {
        this.selectors = {
            registerButton: '.mt-6 a#register-healthcare',
            registrationForm: 'form.register-healthcare',
            organizationName: 'input[name=org_name]',
            organizationAddress: 'input[name=org_place]',
            facilityType: 'select[name=type]',
            hasTestingFacilities: 'input[name=hasTestingFacilities]',
            pocName: 'input[name=contact_name]',
            pocEmail: 'input[name=email]',
            pocPhone: 'input[name=phone]',
            submitButton: 'button[id=submit-healthcare]',
            submitButtonDisabled:
                'button[id=submit-healthcare][disabled=disabled]',
            privacyTermsCheckbox: 'input[id=submit-healthcare-agree]',
            alertSuccess: '.alert-success',
            alertWarning: 'div[id=submit-healthcare-warning]',
            alertPhoneValidationWarning: '.card-body .alert.alert-warning', // TODO: add unique ID for this div
        };
    }

    async register() {
        await page.waitForSelector(this.selectors.registerButton);

        await page.$eval(this.selectors.registerButton, (e) => {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });

        // TODO: wait until scrolled into view instead of this explicit wait
        await page.waitFor(2000);
        await page.focus(this.selectors.registerButton);
        await page.click(this.selectors.registerButton);
    }

    async waitForRegistrationForm() {
        await page.waitForSelector(this.selectors.registrationForm);
        await page.$eval(this.selectors.registrationForm, (e) => {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });
        await page.waitFor(2000);
        await page.focus(this.selectors.registrationForm);
    }

    async enterSiteInfo(data) {
        await page.waitForSelector(this.selectors.organizationName);
        await page.click(this.selectors.organizationName);
        await page.keyboard.type(data.siteName);

        await page.waitForSelector(this.selectors.organizationAddress);
        await page.click(this.selectors.organizationAddress);
        await page.keyboard.type(data.siteAddress);
    }

    async selectFacilityType(type) {
        // TODO: Throw if type is invalid
        // eslint-disable-next-line max-len
        // const validTypes = ['HEALTH/DOCTOR_OFFICE', 'HEALTH/HOSPITAL', 'HEALTH/PHARMACY', 'HEALTH/OTHER'];
        await page.select(this.selectors.facilityType, type);
    }

    async checkAdministerTests() {
        await page.$eval(this.selectors.hasTestingFacilities, (e) => {
            e.click();
        });
    }

    async enterContactInformation(data) {
        await page.waitForSelector(this.selectors.pocName);
        await page.click(this.selectors.pocName);
        await page.keyboard.type(data.name);

        await page.waitForSelector(this.selectors.pocEmail);
        await page.click(this.selectors.pocEmail);
        await page.keyboard.type(data.email);

        await page.waitForSelector(this.selectors.pocPhone);
        await page.click(this.selectors.pocPhone);
        await page.keyboard.type(data.phone);
    }

    async acceptPrivacyTerms() {
        await page.click(this.selectors.privacyTermsCheckbox);
    }

    async submit() {
        await page.waitForSelector(this.selectors.submitButton, {
            visible: true,
        });
        await page.$eval(this.selectors.alertSuccess, (e) => {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });
        // TODO: wait until scrolled into view instead of using explicit waits
        await page.waitFor(2000);
        await page.focus(this.selectors.submitButton);
        await page.waitFor(2000);
        await page.click(this.selectors.submitButton);
    }

    async verifyPrivacyWarning() {
        await page.waitForSelector(this.selectors.alertWarning, {
            visible: true,
        });
        await page.waitForSelector(this.selectors.alertWarning);
        await page.$eval(this.selectors.alertWarning, (e) => {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });

        await expect(page).toMatchElement(this.selectors.alertWarning, {
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
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });

        await expect(page).toMatchElement(
            this.selectors.alertPhoneValidationWarning,
            {
                text:
                    'Some of your information could not be verified, please try again',
            },
        );
    }

    async verifySuccess() {
        await page.waitForSelector(this.selectors.alertSuccess, {
            visible: true,
        });
        await page.waitForSelector(this.selectors.alertSuccess);
        await page.$eval(this.selectors.alertSuccess, (e) => {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end',
            });
        });
    }
}
