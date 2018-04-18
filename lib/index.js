/**
 * @file index.js
 *
 * @desc
 *
 * ### viamo-node-client
 *
 * DISCLAIMER: This is an UNOFFICIAL implementation of a Javascript client for
 * communicating with the Viamo (VOTO) API. Neither this library nor its 
 * authors are affiliated with Viamo.
 *
 * @version 0.1.0
 * @author Johannes Hildén
 * @copyright 2018
 */
module.exports = function(config) {

  if (!config.hasOwnProperty('fullResponse')) {
    config.fullResponse = true;
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

  };

};
