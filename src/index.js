module.exports = (function(options) {
  var self = this
  
  var config = require('./config')(options)
  
  self.sms = require('./sms')(config)
  
  return self
})()