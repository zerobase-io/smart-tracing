import HomePage from '../../__pages__/HomePage';
import RegisterHealthcarePage from '../../__pages__/RegisterHealthcarePage';

describe('Zerobase - Desktop - Register Healthcare', () => {
  let homePage;
  let healthcarePage;

  beforeAll(async () => {
    jest.setTimeout(60000);
  });

  beforeEach(async () => {
    homePage = new HomePage();
    healthcarePage = new RegisterHealthcarePage();
    await homePage.goTo();
  });

  it('should let the user register as a healthcare facility', async () => {
    await homePage.openMenu();
    await homePage.selectHealthcare();

    expect(page.url()).toContain('/testing');

    await healthcarePage.register();

    await healthcarePage.waitForRegistrationForm();

    await healthcarePage.enterSiteInfo({ siteName: 'Fake Site Name', siteAddress: 'Fake Site Address' });

    await healthcarePage.selectFacilityType('HEALTH/DOCTOR_OFFICE');
    await healthcarePage.checkAdministerTests();

    // Google's phone number
    await healthcarePage.enterContactInformation({ name: 'Fake Contact', email: 'zerobase@mailinator.com', phone: '+16502530000' });
    await healthcarePage.acceptPrivacyTerms();

    await healthcarePage.submit();
    await healthcarePage.verifySuccess();

    await page.screenshot({ path: './tests/screenshots/registeHealthcare-success.jpg', type: 'jpeg', fullPage: true });
  });

  it('should ask the user to accept the privacy terms before registering', async () => {
    await homePage.openMenu();
    await homePage.selectHealthcare();

    expect(page.url()).toContain('/testing');

    await healthcarePage.register();

    await healthcarePage.waitForRegistrationForm();

    await healthcarePage.enterSiteInfo({ siteName: 'Fake Site Name', siteAddress: 'Fake Site Address' });

    await healthcarePage.selectFacilityType('HEALTH/DOCTOR_OFFICE');
    await healthcarePage.checkAdministerTests();

    // Google's phone number
    await healthcarePage.enterContactInformation({ name: 'Fake Contact', email: 'zerobase@mailinator.com', phone: '+16502530000' });

    await healthcarePage.submit();
    await healthcarePage.verifyPrivacyWarning();

    await page.screenshot({ path: './tests/screenshots/registeHealthcare-warning.jpg', type: 'jpeg', fullPage: true });
  });

  it('should show an error if the phone is invalid', async () => {
    await homePage.openMenu();
    await homePage.selectHealthcare();

    expect(page.url()).toContain('/testing');

    await healthcarePage.register();

    await healthcarePage.waitForRegistrationForm();

    await healthcarePage.enterSiteInfo({ siteName: 'Fake Site Name', siteAddress: 'Fake Site Address' });

    await healthcarePage.selectFacilityType('HEALTH/DOCTOR_OFFICE');
    await healthcarePage.checkAdministerTests();

    // Google's phone number
    await healthcarePage.enterContactInformation({ name: 'Fake Contact', email: 'zerobase@mailinator.com', phone: 'f' });

    await healthcarePage.acceptPrivacyTerms();
    await healthcarePage.submit();
    await healthcarePage.verifyPhoneValidationWarning();

    await page.screenshot({ path: './tests/screenshots/registeHealthcare-phone-warning.jpg', type: 'jpeg', fullPage: true });
  });
});
