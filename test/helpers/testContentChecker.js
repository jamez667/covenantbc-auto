const contentCheckerHelper = require('./contentChecker');

describe('Testing contentChecker.js', () => {
  describe('Functions', () => {
    it('getDynamicContentToCheck: It should return the default string', () => {
      let contentExpected = contentCheckerHelper.getDynamicContentToCheck(
        'http://www.covenanthousebc.org',
      );

      console.log('***** contentExpected');
      console.log(contentExpected);
    });
    it('getDynamicContentToCheck: It should return a dynamic value based on the URL', () => {
      let contentExpected = contentCheckerHelper.getDynamicContentToCheck(
        'https://www.covenanthousebc.org/about-us/our-purpose-and-principles/',
      );

      console.log('***** contentExpected');
      console.log(contentExpected);
    });
    it('checkContentFromURL: It should return a dynamic value based on the URL', () => {
      let contentExpected = contentCheckerHelper.checkContentFromURL(
        'http://www.covenanthousebc.org',
        'some html',
      );

      console.log('***** contentExpected');
      console.log(contentExpected);
    });
  });
});
