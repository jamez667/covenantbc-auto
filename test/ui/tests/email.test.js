const homePage = require('./page-objects/HomePage.page.js');
const errorPage = require('./page-objects/ErrorSignUpPage.page.js');
const confirmPage = require('./page-objects/ConfirmationPage.page.js');

const assert = require('assert');

const emailsWithFormatError = ['abcde', 'abcde@'];
const emailsWithDomainError = ['abcde@abc'];
const emailsWithCorrectFormat = ['abcde@abc.com'];

describe('On the covenant home page, if I sign up my email ', () => {
  homePage.open();
  it('should check format', () => {
    emailsWithFormatError.forEach((e) => {
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.strictEqual(browser.getUrl(), 'https://www.covenanthousebc.org/');
    });
    emailsWithDomainError.forEach((e) => {
      homePage.open();
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.equal(errorPage.image.isDisplayed(), true);
      assert.equal(errorPage.errorMessage.getText(), 'There are errors below');
    });
    emailsWithCorrectFormat.forEach((e) => {
      homePage.open();
      homePage.emailField.setValue(`${e}`);
      homePage.emailButton.click();
      assert.equal(confirmPage.confirmMessage.getText(), 'Confirm Humanity');
    });
  });
});
