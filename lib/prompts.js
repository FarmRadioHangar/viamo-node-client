module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.prompts.get
     */
    get: function(params) {
      return api.get('prompts', params);
    }

  };

};

