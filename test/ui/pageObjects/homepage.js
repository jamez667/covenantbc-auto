class Homepage {
  get getHelpButton() {
    const getHelpButton = $('.custom-nav-items .get-help a');
    getHelpButton.waitForDisplayed();
    getHelpButton.waitForEnabled();
    return getHelpButton;
  }

  open() {
    browser.url('http://www.covenanthousebc.org/');
  }
}

module.exports = new Homepage();
