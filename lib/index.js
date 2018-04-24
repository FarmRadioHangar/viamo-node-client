/**
 * @file index.js
 *
 * @desc
 *
 * ### viamo-node-client
 *
 * DISCLAIMER: This is an UNOFFICIAL implementation of a Node.js client for
 * communicating with the Viamo (VOTO) API. Neither this library nor its 
 * authors are affiliated with Viamo.
 *
 * | Name             | Required | Type       | Default                         | Description   |
 * | ---------------- | -------- | ---------- | ------------------------------- | ------------- |
 * | key              | yes      | String     |                                 | Viamo API key. See {@link https://go.votomobile.org/apidoc/#authentication} |
 * | url              | no       | String     | http://go.votomobile.org/api/v1 | Viamo API URL |
 * | fullResponse     | no       | String     | false                           | Whether the returned Promise should resolve to the full response. If false, only the response body is returned. |
 *
 * @version 0.1.0
 * @author Johannes Hildén, Farm Radio International
 * @copyright 2018
 */
module.exports = function(config) {
  if ('string' === typeof(config)) {
    config = { key: config };
  }
  if (!config.hasOwnProperty('fullResponse')) {
    config.fullResponse = false;
  }
  if ('string' !== typeof(config.url)) {
    config.url = 'https://go.votomobile.org/api/v1';
  }

  var api = require('./api')(config);

  return {

    audioFiles: require('./modules/audioFiles')(config),

    groups: require('./modules/groups')(config),

    incomingCalls: require('./modules/incomingCalls')(config),

    languages: require('./modules/languages')(config),

    messages: require('./modules/messages')(config),

    outgoingCalls: require('./modules/outgoingCalls')(config),

    phoneNumbers: require('./modules/phoneNumbers')(config),

    prompts: require('./modules/prompts')(config),

    subscribers: require('./modules/subscribers')(config),

    surveys: require('./modules/surveys')(config),

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/index.html#ping-the-api-server
     *
     * @desc Ping the Viamo server.
     *
     * @returns A Promise that resolves to the response object from Viamo. 
     */
    ping: function() {
      return api.get('ping');
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/index.html#check-account-credit
     *
     * @desc Check available account credit.
     *
     * The response contains a `data` property with the organisation’s current 
     * credit balance, in Viamo credits. (1 Viamo credit = 1 USD).
     *
     * @example
     *
     * viamo.accountCredit()
     * .then((res) => {
     *   console.log(res);  // or res.data for the actual credit balance
     * });
     *
     * @returns 
     *
     * A Promise that resolves to the response object from Viamo.      
     *
     * @example
     *
     * { 
     *     status: 200,
     *     code: 2000,
     *     data: '1233',
     *     message: 'Organisation\'s credit fetched successfully',
     *     more_info: '',
     *     pagination: null,
     *     url: 'https://go.votomobile.org/api/v1/accounts/credit' 
     * }
     */
    accountCredit: function() {
      return api.get('accounts/credit');
    }

  };

};
