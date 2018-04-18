/**
 * @module outgoingCalls
 *
 * @see https://go.votomobile.org/apidoc/outgoing_calls.html
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /*
     * viamo.outgoingCalls.create
     *
     * https://go.votomobile.org/apidoc/outgoing_calls.html#create-an-outgoing-call
     */

    /*
     * viamo.outgoingCalls.get
     *
     * https://go.votomobile.org/apidoc/outgoing_calls.html#list-outgoing-calls
     * https://go.votomobile.org/apidoc/outgoing_calls.html#list-details-of-an-outgoing-call
     */
    get: function() {
      return api.get('outgoing_calls', arguments);
    },

    /*
     * viamo.outgoingCalls.cancel
     *
     * https://go.votomobile.org/apidoc/outgoing_calls.html#cancel-outgoing-call
     */

    /*
     * viamo.outgoingCalls.counts
     */
    counts: {

      /*
       * viamo.outgoingCalls.counts.get
       *
       * https://go.votomobile.org/apidoc/outgoing_calls.html#count-interactions-delivery-logs-for-an-outgoing-call
       */
      get: function() {
      }

    },

    /*
     * viamo.outgoingCalls.deliveryLogs
     */
    deliveryLogs: {

      /*
       * viamo.outgoingCalls.deliveryLogs.get
       *
       * https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-an-outgoing-call
       */
      get: function() {
      }

    },

    /*
     * viamo.outgoingCalls.summary
     */
    summary: {

      /*
       * viamo.outgoingCalls.summary.get
       *
       * Retrieve aggregate statistics for an outgoing call.
       *
       * https://go.votomobile.org/apidoc/delivery_logs.html#call-summary-for-an-outgoing-call
       */
      get: function() {
      }

    }

  };

};
