module.exports = {
    authServiceUrl: {
      'localhost': 'https://requestbin.jumio.com/yo7tqryo'
    },
    authParamsModificationFunction: function (params) {
        var md5 = require('md5');
        return {
            login: params.user + '@' + params.server,
            password: md5(params.password)
        };
    },
    anonymousHosts: ['anon.localhost'],
    logPath: 'logs/xmpp-auth.log',
    logLevel: 'trace' // trace is dangerous (plaintext passwords in logs)
};
