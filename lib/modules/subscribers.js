/**
 * @module subscribers
 *
 * @see https://go.votomobile.org/apidoc/subscribers.html
 *
 * @desc 
 *
 * A subscriber in Viamo is an individual identified by their phone number. 
 * Other information associated with subscribers include their primary 
 * language, and whether they can receive calls or SMS. 
 *
 * ### Submodules
 *
 * * [subscribers.groups]{@link module:subscribers^groups}
 * * [subscribers.phone]{@link module:subscribers^phone}
 * * [subscribers.deliveryLogs]{@link module:subscribers^deliveryLogs}
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#create-subscriber
     */
    create: function() {
    },

    /**
     * @instance 
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#list-subscribers
     *
     * @desc List all subscribers.
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
     * @see https://go.votomobile.org/apidoc/subscribers.html#list-subscriber-details
     *
     * @desc Get details of a subscriber.
     *
     * @param id {Number | String} - Subscriber ID
     *
     * @example
     *
     * // TODO
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      var arg0 = arguments[0];
      if ('number' === arg0 || 'string' === arg0) {
        return api.get(`subscribers/${arg0}`, arguments[1]);
      }
      return api.get('subscribers', arg0);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#modify-subscriber-details
     */
    update: function(id) {
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#delete-subscriber
     */
    delete: function(id) {
    },

    /**
     * @module subscribers^groups
     */
    groups: {

      /**
       * @instance
       *
       * @see https://go.votomobile.org/apidoc/groups.html#add-one-or-more-subscribers-to-one-or-more-groups
       */
      create: function() {
      },

      /**
       * @instance
       *
       * @see https://go.votomobile.org/apidoc/subscribers.html#list-subscribers-in-a-group
       */
      get: function() {
      },

      /**
       * @instance
       *
       * @see https://go.votomobile.org/apidoc/groups.html#remove-subscriber-s-from-group-s
       */
      delete: function() {
      }

    },

    /**
     * @module subscribers^phone
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#search-subscriber-by-phone-number
     */
    phone: {

      /**
       * @instance
       *
       * viamo.subscribers.phone.search
       */
      search: function() {
      }

    },

    /**
     * @module subscribers^deliveryLogs
     *
     * @see https://go.votomobile.org/apidoc/delivery_logs.html#delivery-logs
     */
    deliveryLogs: {

      /**
       * @instance
       *
       * @see https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-a-subscriber
       */
      get: function() {
      }

    }

  };

};
