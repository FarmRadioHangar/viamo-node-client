module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.groups.create
     *
     * https://go.votomobile.org/apidoc/groups.html#create-groups
     */

    /*
     * viamo.groups.get
     *
     * https://go.votomobile.org/apidoc/groups.html#list-groups
     * https://go.votomobile.org/apidoc/groups.html#list-group-details
     */
    get: function() {
      return api.get('groups', arguments);
    }

  };

};
