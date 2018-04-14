module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.subscribers.get
     */
    get: function(params) {
      return api.get('subscribers', params);
    }

  };

};

