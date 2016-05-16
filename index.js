var request = require('request')

module.exports = function(key, secret) {
  // default config object
  this.config = {
    url: 'https://api.transmitsms.com/',
    version: 2,
    key: key,
    secret: secret
  }
  
  this.request = function (method, params, callback) {
    request.post({
        url: this.config.url + this.config.version + '/' + method + '.json',
        form: params,
        auth: {
          user: this.config.key,
          pass: this.config.secret
        }
      }, function (error, response, body) {
        if(error || response.statusCode != 200) {
          return new Error(error)
        } else {
          callback(null)
        }
    })
  }
  
  this.sendSms = function (message, to, callback) {
    return this.request('send-sms', {
      message: message,
      to: to
    }, callback)
  }
  
  return this
}