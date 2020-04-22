import HomePage from '../../__pages__/HomePage';
import RegisterBusinessPage from '../../__pages__/RegisterBusinessPage';

describe('Zerobase - Desktop - Register Business', () => {
  let homePage;
  let businessPage;

  beforeAll(async () => {
    jest.setTimeout(60000);
  });

  beforeEach(async () => {
    homePage = new HomePage();
    businessPage = new RegisterBusinessPage();
    await homePage.goTo();
  });

  it('should be able to register as a business', async () => {
    await homePage.openMenu();
    await homePage.selectBusiness();

    expect(page.url()).toContain('/businesses');
    await businessPage.enroll();

    await businessPage.waitForRegistrationForm();

    await businessPage.enterBusinessInfo({
      name: 'Fake Business Name',
      address: 'Fake Business Address',
    });

    await businessPage.selectBusinessType('FINANCIAL/BANK');

    // Google's phone number
    await businessPage.enterContactInformation({
      name: 'Fake Contact',
      email: 'zerobase@mailinator.com',
      phone: '+16502530000',
    });

    await businessPage.acceptPrivacyTerms();
    await businessPage.submit();
    await businessPage.verifySuccess();

    await page.screenshot({
      path: './tests/screenshots/registerBusiness.jpg',
      type: 'jpeg',
    });
  });

  it('should ask the user to accept the privacy terms before registering', async () => {
    await homePage.openMenu();
    await homePage.selectBusiness();

    expect(page.url()).toContain('/businesses');
    await businessPage.enroll();

    await businessPage.waitForRegistrationForm();

    await businessPage.enterBusinessInfo({
      name: 'Fake Business Name',
      address: 'Fake Business Address',
    });

    await businessPage.selectBusinessType('FINANCIAL/BANK');

    // Google's phone number
    await businessPage.enterContactInformation({
      name: 'Fake Contact',
      email: 'zerobase@mailinator.com',
      phone: '+16502530000',
    });

    await businessPage.submit();
    await businessPage.verifyPrivacyWarning();

    await page.screenshot({
      path: './tests/screenshots/registerBusiness.jpg',
      type: 'jpeg',
    });
  });

  it('should show an error if the phone is invalid', async () => {
    await homePage.openMenu();
    await homePage.selectBusiness();

    expect(page.url()).toContain('/businesses');
    await businessPage.enroll();

    await businessPage.waitForRegistrationForm();

    await businessPage.enterBusinessInfo({
      name: 'Fake Business Name',
      address: 'Fake Business Address',
    });

    await businessPage.selectBusinessType('FINANCIAL/BANK');

    // Google's phone number
    await businessPage.enterContactInformation({
      name: 'Fake Contact',
      email: 'zerobase@mailinator.com',
      phone: 'f',
    });
    await businessPage.acceptPrivacyTerms();

    await businessPage.submit();
    await businessPage.verifyPhoneValidationWarning();

    await page.screenshot({
      path: './tests/screenshots/registerBusiness.jpg',
      type: 'jpeg',
    });
  });
});
