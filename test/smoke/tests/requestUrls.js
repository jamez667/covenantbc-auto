const request = require("request-promise");
const Promise = require("bluebird");
let urls = require("./urls.json");

const concurrency = 1; // Don't wanna blow their server. So, one request at a time.
const delayms = 2000; // Just adding some delay to not blow their server
urls = urls.links;

const delay = Promise.coroutine(function*() {
  yield Promise.delay(delayms);
});

Promise.map(
  urls,
  Promise.coroutine(function*(url) {
    url = url.url;
    console.log("about to send request for " + url);
    yield delay();
    let result = yield request({
      uri: url,
      simple: false //  <---  <---  <---  <---
    });
    console.log(result);
  }),
  { concurrency: 1 }
);
