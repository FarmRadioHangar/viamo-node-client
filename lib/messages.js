/**
 * @module messages
 *
 * @see https://go.votomobile.org/apidoc/messages.html
 */
module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/messages.html#create-a-message
     *
     * @desc Create a message.
     *
     * > Messages link audio files in different languages, as well as SMS text, 
     * > to build one piece of content that can be attached to an outgoing call. 
     * > You can reuse messages in future outgoing calls, and monitor overall 
     * > engagement statistics for a message (e.g.: total airtime listened to, 
     * > average fraction listened, etc.)
     *
     * This function takes as argument an object with query parameters to be
     * sent with the Viamo API request. The parameters available for this
     * request are:
     *
     * | Name                  | Required | Type       | Description |
     * | --------------------- | -------- | ---------- | ----------- |
     * | audioFile[languageId] |          |            |             |
     * | smsContent            |          |            |             |
     * | hasVoice              |          |            |             | 
     * | hasSms                |          |            |             | 
     * | title                 |          |            |             | 
     * | hidden                |          |            |             | 
     *
     * *Note:* The properties of this object can alternatively be specified in
     * underscore style (camel case), which is how they are sent in the final
     * request. (E.g., as `some_param` instead of `someParam`.)
     *
     * @param params {Object} - See above
     *
     * @example
     *
     * // Create a new message
     *
     * viamo.messages.create({
     * })
     * .then((res) => {
     *   console.log(res.message);
     * })
     * .catch((error) => {
     *   // Handle error
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     *
     */
    create: function(params) {
    },

    /**
     * viamo.messages.get
     *
     * @see https://go.votomobile.org/apidoc/messages.html#list-messages
     * @see https://go.votomobile.org/apidoc/messages.html#list-details-of-a-message
     */
    get: function() {
      return api.get('messages', arguments);
    },

    /**
     * viamo.messages.update
     *
     * @see https://go.votomobile.org/apidoc/messages.html#update-a-message
     */
    update: function(id, params) {
    },

    /**
     * viamo.messages.delete
     *
     * @see https://go.votomobile.org/apidoc/messages.html#delete-a-message
     */

    /**
     * @module messages^counts
     */
    counts: {

      /**
       * viamo.messages.counts.get
       *
       * @see https://go.votomobile.org/apidoc/messages.html#count-interactions-delivery-logs-for-a-message
       */
      get: function() {
      }

    }

  };

};
