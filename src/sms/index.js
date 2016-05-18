module.exports = function(config) {
  var request = require('../request')
  
  this.send = function (message, to, callback) {
    return request('send-sms', {
      message: message,
      to: to
    }, callback, config)
  }
  
  this.formatNumber = function (countryCode, number, callback) {
    return request('format-number', {
      msisdn: number,
      countrycode: countryCode
    }, function(body){
      typeof callback === 'function' && callback(body.number)
    }, config)
  }
  
  return this
}