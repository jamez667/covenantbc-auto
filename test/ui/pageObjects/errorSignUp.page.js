class ErrorSignUpPage {
  get image() {
    return $('#subscribeFormWelcome img');
  }
  get errorMessage() {
    return $('.formstatus.error');
  }
  open(url) {
    browser.url(`${url}`);
  }
}
module.exports = new ErrorSignUpPage();
