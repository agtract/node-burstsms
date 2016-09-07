var request = require('../request')

module.exports = function (config) {
  var methods = {
    // .send()
    send: function (message, to, from, sendAt, listId, dlrCallback, replyCallback, validity, repliesToEmail, fromShared, countrycode) {
      var params = {
        message: message,
        to: to,
        from: from,
        "send_at": sendAt,
        "list_id": listId,
        "dlr_callback": dlrCallback,
        "reply_callback": replyCallback,
        validity: validity,
        "replies_to_email": repliesToEmail,
        "from_shared": fromShared,
        countrycode: countrycode
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

  return methods
}
