/**
 * @module incomingCalls
 *
 * @see https://go.votomobile.org/apidoc/incoming_calls.html
 *
 * @desc TODO
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * viamo.incomingCalls.get
     *
     * @see https://go.votomobile.org/apidoc/incoming_calls.html#list-incoming-calls
     */
    
    /**
     * @instance
     *
     * viamo.incomingCalls.get
     *
     * @see https://go.votomobile.org/apidoc/incoming_calls.html#list-details-of-an-incoming-call
     */
    get: function() {
      return api.get('incoming_calls', arguments);
    },

    /**
     * @module incomingCalls^counts
     */
    counts: {

      /**
       * @instance
       *
       * viamo.incomingCalls.counts.get
       *
       * @see https://go.votomobile.org/apidoc/incoming_calls.html#count-interactions-delivery-logs-for-an-incoming-call
       */
      get: function() {
      }

    },

    /**
     * @module incomingCalls^deliveryLogs
     */
    deliveryLogs: {

      /**
       * @instance
       *
       * viamo.incomingCalls.deliveryLogs.get
       *
       * @see https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-an-incoming-call
       */
      get: function() {
      }

    }

  };

};
