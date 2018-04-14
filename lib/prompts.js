module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.prompts.get
     */
    get: function() {
      return api.get('prompts', arguments);
    }

  };

};

