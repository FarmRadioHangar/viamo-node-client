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
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/incoming_calls.html#list-incoming-calls
     *
     * @desc List all incoming calls.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    
    /**
     * @instance 
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/incoming_calls.html#list-details-of-an-incoming-call
     *
     * @desc Get details of an incoming call.
     *
     * @param id {Number | String} - Incoming call ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      return api.getResource('incoming_calls', arguments);
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
