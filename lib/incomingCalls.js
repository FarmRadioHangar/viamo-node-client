module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.incomingCalls.get
     *
     * https://go.votomobile.org/apidoc/incoming_calls.html#list-incoming-calls
     * https://go.votomobile.org/apidoc/incoming_calls.html#list-details-of-an-incoming-call
     */
    get: function() {
      return api.get('incoming_calls', arguments);
    }

  };

};
