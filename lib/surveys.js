module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.surveys.get
     */
    get: function() {
      return api.get('surveys', arguments);
    }

  };

};
