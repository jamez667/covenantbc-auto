class SearchPage {
  get searchField() {
    return $$('.search-field');
  }
  get allTitles() {
    return $$('.entry-title');
  }
  open(url) {
    browser.url(`${url}`);
  }
}
module.exports = new SearchPage();
