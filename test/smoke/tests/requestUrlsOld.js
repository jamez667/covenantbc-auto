const request = require('request-promise');
const Promise = require('bluebird');
const urls = require('./urls.json');
const contentChecker = require('./../../helpers/contentChecker');

const concurrency = 1; // Don't wanna blow their server. So, one request at a time.
const delayms = 2000; // Just adding some delay to not blow their server

const delay = Promise.coroutine(function*() {
  yield Promise.delay(delayms);
});

Promise.map(
  urls,
  Promise.coroutine(function*(urlObj) {
    const { url } = urlObj;
    yield delay();
    console.time(`sendRequest${url}`);
    const result = yield request({
      uri: url,
      simple: false,
    });
    console.timeEnd(`sendRequest${url}`);
    const correctContent = contentChecker.checkContentFromURL(url, result);
    if (correctContent) {
      console.log('content matched');
    } else {
      console.log('content match failed');
    }
  }),
  { concurrency },
);
