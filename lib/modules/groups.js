/**
 * @module groups
 *
 * @see https://go.votomobile.org/apidoc/groups.html
 *
 * @desc TODO
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * viamo.groups.create
     *
     * @see https://go.votomobile.org/apidoc/groups.html#create-groups
     */
    create: function() {
    },

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/groups.html#list-groups
     *
     * @desc List groups.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/groups.html#list-group-details
     *
     * @desc Get details of a group.
     *
     * @param id {Number | String} - Group ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      var arg0 = arguments[0];
      if ('number' === arg0 || 'string' === arg0) {
        return api.get(`groups/${arg0}`, arguments[1]);
      }
      return api.get('groups', arg0);
    },

    /**
     * @instance
     *
     * viamo.groups.update
     *
     * @see https://go.votomobile.org/apidoc/groups.html#modify-group-details
     */
    update: function(id) {
    },

    /**
     * @instance
     *
     * viamo.groups.delete
     *
     * @see https://go.votomobile.org/apidoc/groups.html#delete-group
     */
    delete: function(id) {
    }

  };

};
