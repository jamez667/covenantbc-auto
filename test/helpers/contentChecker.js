const urlsConfig = require('../smoke/tests/urls');
const defaultText = 'Covenant House Vancouver';

module.exports = {
  getDynamicContentToCheck: function(urlToCheck) {
    let contentExpectedDynamic = urlToCheck
      .substring(
        urlToCheck.lastIndexOf('/'),
        urlToCheck.substring(1, urlToCheck.lastIndexOf('/')).lastIndexOf('/') +
          2,
      )
      .split('-')
      .join(' ');

    return contentExpectedDynamic ? contentExpectedDynamic : defaultText;
  },
  checkContent: function(contentToCheck, contentExpected) {
    return (
      contentToCheck.toUpperCase().indexOf(contentExpected.toUpperCase()) > -1
    );
  },
  checkContentFromURL: function(urlToCheck, contentToCheck) {
    let urlConfig = urlsConfig.filter(
      (urlConfig) => urlConfig.url.toUpperCase() === urlToCheck.toUpperCase(),
    );
    let contentExpected =
      urlConfig && urlConfig[0] && urlConfig[0].expected
        ? urlConfig[0].expected
        : this.getDynamicContentToCheck(urlToCheck);

    return this.checkContent(contentToCheck, contentExpected);
  },
};
