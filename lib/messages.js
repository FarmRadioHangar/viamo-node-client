module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.messages.get
     */
    get: function() {
      return api.get('messages', arguments);
    }

  };

};
