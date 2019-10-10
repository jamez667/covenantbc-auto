const contentCheckerHelper = require('./contentChecker');
const assert = require('assert');

describe('Testing contentChecker.js', () => {
  describe('Functions', () => {
    it('getDynamicContentToCheck: It should return the default string', () => {
      let contentExpected = contentCheckerHelper.getDynamicContentToCheck(
        'http://www.covenanthousebc.org',
      );

      assert.equal(contentExpected, 'Covenant House Vancouver');
    });
    it('getDynamicContentToCheck: It should return a dynamic value based on the URL', () => {
      let contentExpected = contentCheckerHelper.getDynamicContentToCheck(
        'https://www.covenanthousebc.org/about-us/our-purpose-and-principles/',
      );

      assert.equal(contentExpected, 'our purpose and principles');
    });
    it('checkContentFromURL: It should succeed', () => {
      let contentExpected = contentCheckerHelper.checkContentFromURL(
        'http://www.covenanthousebc.org',
        '<title>Covenant House Vancouver - Shelter and Hope for Homeless Youth</title>',
      );

      assert.equal(contentExpected, true);
    });
    it('checkContentFromURL: It should fail', () => {
      let contentExpected = contentCheckerHelper.checkContentFromURL(
        'http://www.covenanthousebc.org',
        'some html',
      );

      assert.equal(contentExpected, false);
    });
  });
});
