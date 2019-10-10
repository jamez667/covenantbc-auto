const ping = require('ping');
const assert = require('assert');
const hosts = ['www.covenanthousebc.org'];

describe('ping results', () => {
  hosts.forEach((host) => {
    describe(host, () => {
      it('should be alive', async () => {
        const res = await ping.promise.probe(host);
        assert.ok(res.alive);
      });
    });
  });
});
