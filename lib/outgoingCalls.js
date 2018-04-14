module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.outgoingCalls.get
     */
    get: function() {
      return api.get('outgoing_calls', arguments);
    }

  };

};

