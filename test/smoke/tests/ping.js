const request = require('request-promise');
const assert = require('assert');
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
