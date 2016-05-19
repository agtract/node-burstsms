var _ = require('lodash')

module.exports = (function(options) {
  var self = this
  var config = require('./config')(options)

  self.resources = {
    sms: require('./sms')(config)
  }

  // we'll return only objects from known places, such as self.methods. This keeps everything else private.
  return _.assign({}, self.resources)
})()