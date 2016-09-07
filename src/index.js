module.exports = function(options) {
  var config = require('./config')(options)

  var resources = {
    sms: require('./sms')(config)
  }

  return resources
}
