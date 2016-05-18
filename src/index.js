var request = require('request')

module.exports = function(options) {
  var config = require('./config')(options)
  
  this.sms = require('./sms')(config)
  
  return this
}