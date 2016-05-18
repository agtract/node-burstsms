var request = require('request')
var defaultsDeep = require('lodash').defaultsDeep

module.exports = function (method, params, callback, config) {
  config = defaultsDeep(config, {
    url: 'https://api.transmitsms.com/',
    version: 2,
    key: null,
    secret: null
  })
  
  request.post({
      url: config.url + config.version + '/' + method + '.json',
      form: params,
      auth: {
        user: config.key,
        pass: config.secret
      }
    }, function (error, response, body) {
      if(error || response.statusCode != 200) {
        return new Error(error)
      } else {
        typeof callback === 'function' && callback(JSON.parse(body))
      }
  })
}