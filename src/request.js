var request = require('request')
var defaultsDeep = require('lodash').defaultsDeep

module.exports = function (method, params, config) {
  config = defaultsDeep(config, {
    url: 'https://api.transmitsms.com/',
    version: 2,
    key: null,
    secret: null
  })
  
  return request.post({
    url: config.url + config.version + '/' + method + '.json',
    form: params,
    auth: {
      user: config.key,
      pass: config.secret
    }
  }, function () {})
}