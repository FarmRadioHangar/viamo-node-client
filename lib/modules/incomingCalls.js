/**
 * @module incomingCalls
 *
 * @see https://go.votomobile.org/apidoc/incoming_calls.html
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /*
     * viamo.incomingCalls.get
     *
     * https://go.votomobile.org/apidoc/incoming_calls.html#list-incoming-calls
     * https://go.votomobile.org/apidoc/incoming_calls.html#list-details-of-an-incoming-call
     */
    get: function() {
      return api.get('incoming_calls', arguments);
    },

    /*
     * viamo.incomingCalls.counts
     */
    counts: {

      /*
       * viamo.incomingCalls.counts.get
       *
       * https://go.votomobile.org/apidoc/incoming_calls.html#count-interactions-delivery-logs-for-an-incoming-call
       */
      get: function() {
      }

    },

    /*
     * viamo.incomingCalls.deliveryLogs
     */
    deliveryLogs: {

      /*
       * viamo.incomingCalls.deliveryLogs.get
       *
       * https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-an-incoming-call
       */
      get: function() {
      }

    }

  };

};
