module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.incomingCalls.get
     */
    get: function(params) {
      return api.get('incoming_calls', params);
    }

  };

};

