module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.languages.get
     */
    get: function() {
      return api.get('languages', arguments);
    }

  };

};

