/**
 * @file Project description which renders below the individual filename and therefore isn't a real overview blurb.
 *
 * @desc
 *
 * ### viamo-node-client
 *
 * DISCLAIMER: This is an unofficial library. Neither it nor its authors are
 * affiliated with Viamo.
 *
 * @version 0.1.0
 * @author Johannes Hildén
 * @copyright 2018
 */
module.exports = function(config) {

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
