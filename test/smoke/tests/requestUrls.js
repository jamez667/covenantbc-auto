const request = require('request-promise');
const Promise = require('bluebird');
let urls = require('./urls.json');
const contentChecker = require('./../../helpers/contentChecker');
const assert = require('assert');

const concurrency = 1; // Don't wanna blow their server. So, one request at a time.
const delayms = 2000; // Just adding some delay to not blow their server

const delay = Promise.coroutine(function*() {
  yield Promise.delay(delayms);
});
urls = [urls[0]];
describe('url fetch results', () => {
  urls.forEach((urlObj) => {
    describe('Test different site urls', () => {
      it('Test ' + urlObj.url, async () => {
        console.time(`sendRequest${urlObj.url}`);
        const result = await request({
          uri: urlObj.url,
          simple: false,
        });
        console.timeEnd(`sendRequest${urlObj.url}`);
        const correctContent = contentChecker.checkContentFromURL(
          urlObj.url,
          result,
        );
        assert.equal(correctContent, true);
      });
    });
  });
});
