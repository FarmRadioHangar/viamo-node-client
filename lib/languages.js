module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.languages.get
     */
    get: function(params) {
      return api.get('languages', params);
    }

  };

};

