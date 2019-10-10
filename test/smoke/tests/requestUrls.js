const request = require("request-promise");
const Promise = require("bluebird");
let urls = require("./urls.json");
let contentChecker = require("./../../helpers/contentChecker");

const concurrency = 1; // Don't wanna blow their server. So, one request at a time.
const delayms = 2000; // Just adding some delay to not blow their server

const delay = Promise.coroutine(function*() {
  yield Promise.delay(delayms);
});

Promise.map(
  urls,
  Promise.coroutine(function*(url) {
    url = url.url;
    yield delay();
    console.time("sendRequest" + url);
    let result = yield request({
      uri: url,
      simple: false
    });
    console.timeEnd("sendRequest" + url);
    let correctContent = contentChecker.checkContentFromURL(url, result);
    if (correctContent) {
      console.log("content matched");
    } else {
      console.log("content match failed");
    }
  }),
  { concurrency: concurrency }
);
