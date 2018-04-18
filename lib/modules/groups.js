/**
 * @module groups
 *
 * @see https://go.votomobile.org/apidoc/groups.html
 */
module.exports = function(config) {

  var api = require('../api')(config);

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

    /*
     * viamo.groups.update
     *
     * https://go.votomobile.org/apidoc/groups.html#modify-group-details
     */

    /*
     * viamo.groups.delete
     *
     * https://go.votomobile.org/apidoc/groups.html#delete-group
     */

  };

};
