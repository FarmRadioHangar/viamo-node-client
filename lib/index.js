module.exports = function(config) {

  return {

    /*
     * viamo.surveys
     */
    surveys: require('./surveys')(config),

    /*
     * viamo.audioFiles
     */
    audioFiles: require('./audioFiles')(config),

    /*
     * viamo.groups
     */
    groups: require('./groups')(config),

    /*
     * viamo.incomingCalls
     */
    incomingCalls: require('./incomingCalls')(config),

    /*
     * viamo.outgoingCalls
     */
    outgoingCalls: require('./outgoingCalls')(config),

    /*
     * viamo.phoneNumbers
     */
    phoneNumbers: require('./phoneNumbers')(config),

    /*
     * viamo.prompts
     */
    prompts: require('./prompts')(config),

    /*
     * viamo.subscribers
     */
    subscribers: require('./subscribers')(config),

    /*
     * viamo.surveys
     */
    surveys: require('./surveys')(config)

  };

};
