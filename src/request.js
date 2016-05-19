var request = require('request')
var defaultsDeep = require('lodash').defaultsDeep
var Promise = require('promise')

module.exports = function (method, params, config) {
  config = defaultsDeep(config, {
    url: 'https://api.transmitsms.com/',
    version: 2,
    key: null,
    secret: null
  })
  
  return new Promise(function (fulfill, reject){
    request.post({
      url: config.url + config.version + '/' + method + '.json',
      form: params,
      auth: {
        user: config.key,
        pass: config.secret
      }
    }, function (err, res, body) {
      if (err) reject(err)
      body = JSON.parse(body)
      if (res.statusCode !== 200 || body.error.code !== 'SUCCESS') reject(body.error.description)
      if ('error' in body.error) reject(body.error.error.message)
      fulfill(body, res)
    })
  })
}