/**
 * @module subscribers
 *
 * @see https://go.votomobile.org/apidoc/subscribers.html
 *
 * @desc 
 *
 * Subscribers in Viamo are individuals, identified by their phone numbers. 
 * Other associated information include primary language, and whether a
 * subscriber can receive calls or SMS. 
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
     *
     * @desc Create a subscriber.
     *
     * This function takes as argument an object with query parameters to be
     * sent with the Viamo API request. The parameters available for this
     * request are:
     *
     * | Name             | Required | Type       | Default      | Description |
     * | ---------------- | -------- | ---------- | ------------ | ----------- |
     * | phone            | Yes      | String     |              | Phone number of subscriber in local or international format. |
     * | receiveVoice     | No       | Boolean    | true         | |
     * | receiveSms       | No       | Boolean    | false        | |
     * | startingDate     | No       | String     | CURRENT DATE | |
     * | groups           | No       | Array      |              | |
     * | active           | No       | Boolean    | true         | |
     * 
     * *Note:* The properties of this object can alternatively be specified in
     * underscore style (camel case), which is how they are sent in the final
     * request. (E.g., as `some_param` instead of `someParam`.)
     *
     * #### Creating bulk subscribers
     *
     * | Name             | Required | Type       | Description |
     * | ---------------- | -------- | ---------- | ----------- |
     * | phone_numbers    | No       | String &vert; Array | x |
     * | if_phone_number_exists: | No | "skip" &vert; "create_duplicate" &vert; "add_to_groups_only" | x |
     *
     * @param params {Object} - See above
     *
     * @returns A Promise that resolves to the response object from Viamo.
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
      return api.getResource('subscribers', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#modify-subscriber-details
     *
     * @desc Modify subscriber details.
     *
     * @param id {Number | String} - Subscriber ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id, params) {
      if (!id) {
        return Promise.reject(new Error('Subscriber ID is required.'));
      }
      //
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/subscribers.html#delete-subscriber
     *
     * @desc Delete a subscriber.
     *
     * @param id {Number | String} - Subscriber ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function(id) {
      if (!id) {
        return Promise.reject(new Error('Subscriber ID is required.'));
      }
      //
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
