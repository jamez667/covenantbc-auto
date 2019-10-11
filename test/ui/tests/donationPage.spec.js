const expect = require('chai').expect;
const DonationPage = require('../pageObjects/donation.page');

describe('Donation Page', () => {
  beforeEach(() => {
    DonationPage.open();
  });
  it('Invalid Credit Card should be declined', () => {
    DonationPage.billingTitle.click();
    DonationPage.billingOptions[2].click();
    expect(DonationPage.billingTitle.getValue()).to.equal('Ms.');

    DonationPage.firstName.setValue('Testing');
    expect(DonationPage.firstName.getValue()).to.equal('Testing');

    DonationPage.middleName.setValue('midName');
    expect(DonationPage.middleName.getValue()).to.equal('midName');

    DonationPage.lastName.setValue('lastName');
    expect(DonationPage.lastName.getValue()).to.equal('lastName');

    DonationPage.address1.setValue('123 Testing rd.');
    expect(DonationPage.address1.getValue()).to.equal('123 Testing rd.');

    DonationPage.cityName.setValue('Burnaby');
    expect(DonationPage.cityName.getValue()).to.equal('Burnaby');

    DonationPage.provinceName.click();
    DonationPage.provinceOptions[6].click();
    expect(DonationPage.provinceName.getValue()).to.equal('NS');

    DonationPage.postalCode.setValue('V0K0L0');
    expect(DonationPage.postalCode.getValue()).to.equal('V0K0L0');

    DonationPage.countryName.click();
    DonationPage.countryOptions[4].click();
    expect(DonationPage.countryName.getValue()).to.equal('Aland Islands');

    DonationPage.phoneNumber.setValue('7782463456');
    expect(DonationPage.phoneNumber.getValue()).to.equal('7782463456');

    DonationPage.emailAddress.setValue('testing@gmail.com');
    expect(DonationPage.emailAddress.getValue()).to.equal('testing@gmail.com');

    DonationPage.ccNumber.setValue('4111111111111111');
    expect(DonationPage.ccNumber.getValue()).to.equal('4111111111111111');

    DonationPage.expiryMonth.click();
    DonationPage.expiryMonthOptions[11].click();
    expect(DonationPage.expiryMonth.getValue()).to.equal('12');

    DonationPage.expiryYear.click();
    DonationPage.expiryYearOptions[0].click();
    expect(DonationPage.expiryYear.getValue()).to.equal(
      new Date().getFullYear().toString(),
    );

    DonationPage.cvvNumber.setValue('222');
    expect(DonationPage.cvvNumber.getValue()).to.equal('222');

    DonationPage.donateSubmit.click();

    DonationPage.errorContainer.waitForDisplayed();
    expect(DonationPage.errorMessage.getText()).to.equal(
      'The credit card was declined. Please check the information that you entered.',
    );
  });

  it('Donation levels should change when clicked', () => {
    expect(DonationPage.donationLevels.isDisplayed()).to.be.true;

    DonationPage.donationLevel[0].click();
    expect(DonationPage.donationLevelInput[0].getAttribute('checked')).to.equal(
      'true',
    );

    DonationPage.donationLevel[5].click();
    expect(DonationPage.donationLevelInput[0].getAttribute('checked')).to.equal(
      null,
    );
    expect(DonationPage.donationLevelInput[5].getAttribute('checked')).to.equal(
      'true',
    );

    DonationPage.donationLevelUser.setValue('$300.00');
    expect(DonationPage.donationLevelUser.getValue()).to.equal('$300.00');

    DonationPage.donationLevel[3].click();
    expect(DonationPage.donationLevelInput[5].getAttribute('checked')).to.equal(
      null,
    );
    expect(DonationPage.donationLevelInput[3].getAttribute('checked')).to.equal(
      'true',
    );
    expect(DonationPage.donationLevelUser.getValue()).to.equal('');
  });

  it('Required information should give errors when submitted', () => {
    DonationPage.provinceName.click();
    DonationPage.provinceOptions[0].click();

    DonationPage.countryName.click();
    DonationPage.countryOptions[0].click();

    DonationPage.donateSubmit.click();

    DonationPage.errorContainer.waitForDisplayed();
    expect(DonationPage.errorMessage.getText()).to.equal(
      'There was a problem processing your request.',
    );
    expect(DonationPage.firstNameError.getText()).to.equal(
      'A first name is required.',
    );
    expect(DonationPage.lastNameError.getText()).to.equal(
      'A last name is required.',
    );
    expect(DonationPage.address1Error.getText()).to.equal(
      'A street address is required.',
    );
    expect(DonationPage.cityError.getText()).to.equal('A city is required.');
    expect(DonationPage.provinceError.getText()).to.equal(
      'A province or state is required.',
    );
    expect(DonationPage.postalError.getText()).to.equal(
      'A postal or zip code is required.',
    );
    expect(DonationPage.countryError.getText()).to.equal(
      'Billing country is required.',
    );
    expect(DonationPage.emailError.getText()).to.equal(
      'An email address is required.',
    );
    expect(DonationPage.ccError.getText()).to.equal(
      'Credit card number is required.',
    );

    DonationPage.ccNumber.setValue('4111111111111111');
    expect(DonationPage.ccNumber.getValue()).to.equal('4111111111111111');

    DonationPage.donateSubmit.click();
    expect(DonationPage.cvvError.getText()).to.equal('CVV number is required.');
  });

  it('Some input should be validated when submitted', () => {
    DonationPage.emailAddress.setValue('testing');
    expect(DonationPage.emailAddress.getValue()).to.equal('testing');

    DonationPage.ccNumber.setValue('11');
    expect(DonationPage.ccNumber.getValue()).to.equal('11');

    DonationPage.expiryMonth.click();
    DonationPage.expiryMonthOptions[0].click();
    expect(DonationPage.expiryMonth.getValue()).to.equal('1');

    DonationPage.donateSubmit.click();
    expect(DonationPage.emailError.getText()).to.equal(
      'The email address is invalid.',
    );
    expect(DonationPage.ccError.getText()).to.equal(
      'Credit card number is invalid.',
    );

    DonationPage.ccNumber.setValue('4111111111111111');
    expect(DonationPage.ccNumber.getValue()).to.equal('4111111111111111');

    DonationPage.expiryMonth.click();
    DonationPage.expiryMonthOptions[0].click();
    expect(DonationPage.expiryMonth.getValue()).to.equal('1');

    DonationPage.donateSubmit.click();
    if (new Date().getMonth() > 0) {
      expect(DonationPage.expiryError.getText()).to.equal(
        'Credit card expiration date is invalid.',
      );
    }

    DonationPage.expiryMonth.click();
    DonationPage.expiryMonthOptions[11].click();
    expect(DonationPage.expiryMonth.getValue()).to.equal('12');

    DonationPage.cvvNumber.setValue('a');
    expect(DonationPage.cvvNumber.getValue()).to.equal('a');

    DonationPage.donateSubmit.click();
    expect(DonationPage.cvvError.getText()).to.equal('CVV number is invalid.');
  });
});
