var ping = require('ping');
var hosts = ['www.covenanthousebc.org'];
hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
            console.log(res);
        });
})
