/**
 * @module accounts
 *
 * @see https://go.votomobile.org/apidoc/index.html#additional-api-calls
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/index.html#check-account-credit
     */
    credit: function() {
    }

  };

};
