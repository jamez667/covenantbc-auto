const homePage = require('./page-objects/HomePage.page.js');
const searchPage = require('./page-objects/SearchPage.page.js');
const assert = require('assert');
const expect = require('chai').expect;

const listOfSearchItems = ['food', 'ksajkbd', ''];

describe('On the covenant home page, if I search for the keyword ', () => {
  listOfSearchItems.forEach((e) => {
    it(' should have go to the right search page', () => {
      homePage.open();
      homePage.searchSign.click();
      homePage.searchField.waitForDisplayed();
      homePage.searchField.setValue(e);
      homePage.searchButton.click();
      const newSearchUrl = browser.getUrl();
      expect(newSearchUrl).to.include('s=' + e + '&');
    });

    it(' should have prefilled text and results with the keyword in the titles', () => {
      searchPage.open(browser.getUrl());
      assert.equal(searchPage.searchField[1].getValue(), `${e}`);
    });

    it(' should have results with the keyword in the titles', () => {
      searchPage.allTitles.forEach((elem) => {
        expect(elem.getText().toLowerCase()).to.include(`${e}`);
      });
    });
  });
});
