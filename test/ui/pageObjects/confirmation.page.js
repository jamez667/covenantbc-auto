class ConfirmationPage {
  get confirmMessage() {
    return $('#templateBody h2');
  }
  open(url) {
    browser.url(`${url}`);
  }
}
module.exports = new ConfirmationPage();
