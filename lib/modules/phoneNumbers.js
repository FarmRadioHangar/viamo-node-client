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

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/toll_numbers.html#add-an-inbound-phone-number
     */
    add: function() {
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/toll_numbers.html#send-activation-code
     */
    sendActivationCode: function() {
    },

    /**
     * @instance
     *
     * viamo.phoneNumbers.activate
     *
     * @see https://go.votomobile.org/apidoc/toll_numbers.html#activate-phone-number
     */
    activate: function() {
    }

  };

};
