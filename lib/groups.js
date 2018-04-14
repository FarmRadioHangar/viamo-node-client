module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.groups.get
     */
    get: function(params) {
      return api.get('groups', params);
    }

  };

};

