var defaultsDeep = require('lodash').defaultsDeep
var rc = require('rc')

module.exports = function(options) {
  options = rc('burstsms', options)
  return defaultsDeep(options, {
    url: 'https://api.transmitsms.com/',
    version: 2,
    key: null,
    secret: null
  })
}