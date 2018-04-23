/**
 * @module phoneNumbers
 *
 * @see https://go.votomobile.org/apidoc/toll_numbers.html
 *
 * @desc TODO
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /*
     * viamo.phoneNumbers.create
     */

    /*
     * viamo.phoneNumbers.get
     */
    get: function() {
      return api.get('phone_numbers', arguments);
    },

    /*
     * viamo.phoneNumbers.sendCode
     *
     * https://go.votomobile.org/apidoc/toll_numbers.html#send-activation-code
     */
    sendCode: function() {
    },

    /*
     * viamo.phoneNumbers.activate
     *
     * https://go.votomobile.org/apidoc/toll_numbers.html#activate-phone-number
     */
    activate: function() {
    }

  };

};
