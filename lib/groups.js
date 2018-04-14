module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.groups.get
     */
    get: function() {
      return api.get('groups', arguments);
    }

  };

};
