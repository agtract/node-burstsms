var _ = require('lodash')
var request = require('../request')

module.exports = function (config) {
  var self = this

  self.methods = {
    // .send()
    send: function (message, to) {
      var params = {
        message: message,
        to: to
      }
      return request('send-sms', params, config)
    },

    // .formatNumber()
    formatNumber: function (countryCode, number) {
      var params = {
        msisdn: number,
        countrycode: countryCode
      }
      return request('format-number', params, config)
    }
  }

  // we'll return only objects from known places, such as self.methods. This keeps everything else private.
  return _.assign({}, self.methods)
}