const ping = require('ping');

const hosts = ['www.covenanthousebc.org'];
hosts.forEach((host) => {
  ping.promise.probe(host)
    .then((res) => {
      console.log(res);
    });
});
