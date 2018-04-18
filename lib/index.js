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
 * | api.key          | yes      | String     |                                 | Viamo API key. See {@link https://go.votomobile.org/apidoc/#authentication} |
 * | api.url          | no       | String     | http://go.votomobile.org/api/v1 | Viamo API URL |
 * | fullResponse     | no       | String     | true                            | Whether the returned Promise should resolve to the full response. If false, only the response body is returned. |
 *
 * @version 0.1.0
 * @author Johannes Hildén
 * @copyright 2018
 */
module.exports = function(config) {

  if (!config.hasOwnProperty('fullResponse')) {
    config.fullResponse = true;
  }
  config.api = config.api || {};
  if ('string' !== typeof(config.api.url)) {
    config.api.url = 'https://go.votomobile.org/api/v1';
  }

  return {

    surveys: require('./surveys')(config),

    audioFiles: require('./audioFiles')(config),

    groups: require('./groups')(config),

    incomingCalls: require('./incomingCalls')(config),

    outgoingCalls: require('./outgoingCalls')(config),

    phoneNumbers: require('./phoneNumbers')(config),

    prompts: require('./prompts')(config),

    subscribers: require('./subscribers')(config),

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/index.html#ping-the-api-server
     */
    ping: function() {
    }

  };

};
