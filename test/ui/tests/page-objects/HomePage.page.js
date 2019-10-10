class HomePage {
  get searchSign() {
    return $('.search a');
  }
  get searchField() {
    return $('.search-field');
  }
  get searchButton() {
    return $('.search-submit');
  }
  get emailField() {
    return $('#mce-EMAIL');
  }
  get emailButton() {
    return $('#mc-embedded-subscribe');
  }
  open() {
    browser.url('https://www.covenanthousebc.org/');
  }
}
module.exports = new HomePage();
