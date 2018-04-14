module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.surveys.get
     */
    get: function(params) {
      return api.get('surveys', params);
    }

  };

};
