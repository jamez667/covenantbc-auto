const request = require("request-promise");
const Promise = require("bluebird");
let urls = require("./urls.json");

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
  }),
  { concurrency: concurrency }
);
