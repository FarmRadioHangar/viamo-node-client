module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.messages.get
     */
    get: function(params) {
      return api.get('messages', params);
    }

  };

};

