module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.outgoingCalls.create
     *
     * https://go.votomobile.org/apidoc/outgoing_calls.html#create-an-outgoing-call
     */

    /*
     * viamo.outgoingCalls.get
     *
     * https://go.votomobile.org/apidoc/outgoing_calls.html#list-outgoing-calls
     * https://go.votomobile.org/apidoc/outgoing_calls.html#list-details-of-an-outgoing-call
     */
    get: function() {
      return api.get('outgoing_calls', arguments);
    }

  };

};
