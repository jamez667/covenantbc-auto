const homePage = require('../pageObjects/home.page');
const errorPage = require('../pageObjects/errorSignUp.page');
const confirmPage = require('../pageObjects/confirmation.page');

const assert = require('assert');

const emailsWithFormatError = ['abcde', 'abcde@'];
const emailsWithDomainError = ['abcde@abc'];
const emailsWithCorrectFormat = ['abcde@abc.com'];

describe('On the covenant home page, if I sign up my email ', () => {
  homePage.open();
  emailsWithFormatError.forEach((e) => {
    it(`should check email: '${e}' with format error `, () => {
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.strictEqual(browser.getUrl(), 'https://www.covenanthousebc.org/');
    });
  });

  emailsWithDomainError.forEach((e) => {
    it(`should check email: '${e}' with domain error `, () => {
      homePage.open();
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.equal(errorPage.image.isDisplayed(), true);
      assert.equal(errorPage.errorMessage.getText(), 'There are errors below');
    });
  });

  emailsWithCorrectFormat.forEach((e) => {
    it(`should go to sign up page with correct email: ${e}`, () => {
      homePage.open();
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.equal(confirmPage.confirmMessage.getText(), 'Confirm Humanity');
    });
  });
});
