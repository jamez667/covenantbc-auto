const request = require('request-promise');
const Promise = require('bluebird');
let urls = require('./urls.json');
const contentChecker = require('./../../helpers/contentChecker');
const assert = require('assert');

const delayms = 2000; // Just adding some delay to not blow their server

const hosts = ['www.covenanthousebc.org'];

describe('ping results', () => {
  hosts.forEach((host) => {
    describe(host, () => {
      it('should be alive', async () => {
        await request({ method: 'HEAD', uri: `http://${host}` })
          .then((response) => {
            assert.ok(true);
          })
          .catch((e) => {
            assert.ok(false, JSON.stringify(e));
          });
      });
    });
  });
});


describe('url fetch results', () => {
  urls.forEach(async (urlObj) => {
    describe('Test different site urls', () => {
      it('Test ' + urlObj.url, async () => {
        console.time(`sendRequest${urlObj.url}`);
        const result = await request({
          uri: urlObj.url,
          simple: false,
        });
        const correctContent = contentChecker.checkContentFromURL(
          urlObj.url,
          result,
        );
        console.timeEnd(`sendRequest${urlObj.url}`);
        assert.equal(correctContent, true);
        await Promise.delay(delayms);
      });
    });
  });
});
