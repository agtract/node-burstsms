var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter
var defaultsDeep = require('lodash').defaultsDeep

var sms = function (config) {
  if (!(this instanceof sms))
    return new sms(config);

  var self = this

  var request = require('../request')

  this.send = function (message, to) {    
    self.emit('send:before', message, to)

    var req = request('send-sms', {
      message: message,
      to: to
    }, config)

    req.on('complete', function(res, body) {
      var data = {
        response: res.toJSON(),
        body: JSON.parse(body)
      }

      self.emit('send:complete', data)

      if (data.response.statusCode === 200 && data.body.error.code === 'SUCCESS') {
        self.emit('send:success', data.body, data)
      } else {
        self.emit('send:error', new Error(data.body.error.description), data)
      }
    });
    
    return self
  }

  this.formatNumber = function (countryCode, number) {
    self.emit('format-number:before', countryCode, number)

    var req = request('format-number', {
      msisdn: number,
      countrycode: countryCode
    }, config)

    req.on('complete', function(res, body) {
      var data = {
        response: res.toJSON(),
        body: JSON.parse(body)
      }

      self.emit('format-number:complete', data)

      if (data.response.statusCode === 200 && data.body.error.code === 'SUCCESS') {
        self.emit('format-number:success', data.body.number, data)
      } else {
        self.emit('format-number:error', new Error(data.body.error.description), data)
      }
    });
    
    return self
  }
}
inherits(sms, EventEmitter)
module.exports = sms