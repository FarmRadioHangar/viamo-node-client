/**
 * @module messages
 *
 * @see https://go.votomobile.org/apidoc/messages.html
 *
 * @desc
 *
 * A message links audio files in different languages, as well as SMS text, to 
 * build pieces of content that can be attached to an outgoing call. 
 *
 * ### Submodules
 *
 * * [messages.counts]{@link module:messages^counts}
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/messages.html#create-a-message
     *
     * @desc Create a message. 
     *
     * This function takes as argument an object with query parameters to be
     * sent with the Viamo API request. The parameters available for this
     * request are:
     *
     * | Name                   | Required | Type       | Description |
     * | ---------------------- | -------- | ---------- | ----------- |
     * | audioFile[languageId]  |          | String     |             |
     * | smsContent[languageId] |          | String     |             |
     * | hasVoice               |          | Boolean    | Indicate whether the message contains a voice message. | 
     * | hasSms                 |          | Boolean    | Indicate whether the message contains an SMS message. | 
     * | title                  |          | String     | The title of the message | 
     * | hidden                 |          | Boolean    | Indicate whether the message should be set to archived on the Viamo platform. Useful when creating automated messages. | 
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
     */
    create: function(params) {
      return Promise.resolve(api.params.normalize(params, {
        'has_voice': {
          format: api.params.BinChar,
          alias: 'hasVoice'
        },
        'has_sms': {
          format: api.params.BinChar,
          alias: 'hasSms'
        },
        'title': {
          required: true
        },
        'hidden': {}
      }))
      .then(function(params) {
        return api.post('messages', params);
      });
    },

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/messages.html#list-messages
     *
     * @desc List all messages.
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
     * @see https://go.votomobile.org/apidoc/messages.html#list-details-of-a-message
     *
     * @desc Get details of a message.
     *
     * @param id {Number | String} - Message ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      var arg0 = arguments[0];
      if ('number' === arg0 || 'string' === arg0) {
        return api.get(`messages/${arg0}`, arguments[1]);
      }
      return api.get('messages', arg0);
    },

    /**
     * @instance
     *
     * viamo.messages.update
     *
     * @see https://go.votomobile.org/apidoc/messages.html#update-a-message
     */
    update: function(id, params) {
    },

    /**
     * @instance
     *
     * viamo.messages.delete
     *
     * @see https://go.votomobile.org/apidoc/messages.html#delete-a-message
     */
    delete: function(id) {
    },

    /**
     * @module messages^counts
     */
    counts: {

      /**
       * @instance
       *
       * @method get
       *
       * @see https://go.votomobile.org/apidoc/messages.html#count-interactions-delivery-logs-for-a-message
       *
       * @desc messages.counts.get
       */
      get: function() {
      }

    }

  };

};
