/**
 * @module outgoingCalls
 *
 * @see https://go.votomobile.org/apidoc/outgoing_calls.html
 *
 * @desc 
 *
 * An outgoing call is a request to Viamo to send a call or SMS to multiple 
 * subscribers. Content can be added in the form of a message and/or survey.
 *
 * ### Submodules
 *
 * * [outgoingCalls.counts]{@link module:outgoingCalls^counts}
 * * [outgoingCalls.deliveryLogs]{@link module:outgoingCalls^deliveryLogs}
 * * [outgoingCalls.summary]{@link module:outgoingCalls^summary}
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/outgoing_calls.html#create-an-outgoing-call
     */
    create: function() {
    },

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/outgoing_calls.html#list-outgoing-calls
     *
     * @desc List outgoing calls.
     *
     * @param params {Object} - An object with query parameters to be sent with 
     *                          the Viamo API request. The query parameters 
     *                          available for this request are:
     *
     * | Name    | Required | Type       | Description |
     * | ------- | -------- | ---------- | ----------- |
     * | `limit` | no       | Number     | Maximum page size to use for paginated results. |
     *
     * @example
     *
     * // TODO
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/outgoing_calls.html#list-details-of-an-outgoing-call
     *
     * @desc Get details of an outgoing call.
     *
     * @param id {Number | String} - Outgoing call ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      return api.getResource('outgoing_calls', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/outgoing_calls.html#cancel-outgoing-call
     *
     * @param id {Number | String} - Outgoing call ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    cancel: function(id) {
      if (!id) {
        return Promise.reject(new Error('Outgoing call ID is required.'));
      }
      //
    },

    /**
     * @module outgoingCalls^counts
     */
    counts: {

      /**
       * @instance 
       *
       * viamo.outgoingCalls.counts.get
       *
       * @see https://go.votomobile.org/apidoc/outgoing_calls.html#count-interactions-delivery-logs-for-an-outgoing-call
       */
      get: function() {
      }

    },

    /**
     * @module outgoingCalls^deliveryLogs
     */
    deliveryLogs: {

      /**
       * @instance
       *
       * viamo.outgoingCalls.deliveryLogs.get
       *
       * @see https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-an-outgoing-call
       */
      get: function() {
      }

    },

    /**
     * @module outgoingCalls^summary
     */
    summary: {

      /**
       * @instance
       *
       * viamo.outgoingCalls.summary.get
       *
       * Retrieve aggregate statistics for an outgoing call.
       *
       * @see https://go.votomobile.org/apidoc/delivery_logs.html#call-summary-for-an-outgoing-call
       */
      get: function() {
      }

    }

  };

};
