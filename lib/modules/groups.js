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
     * viamo.groups.get
     *
     * @see https://go.votomobile.org/apidoc/groups.html#list-groups
     */

    /**
     * @instance
     *
     * viamo.groups.get
     *
     * @see https://go.votomobile.org/apidoc/groups.html#list-group-details
     */
    get: function() {
      return api.get('groups', arguments);
    },

    /**
     * @instance
     *
     * viamo.groups.update
     *
     * @see https://go.votomobile.org/apidoc/groups.html#modify-group-details
     */
    update: function() {
    },

    /**
     * @instance
     *
     * viamo.groups.delete
     *
     * @see https://go.votomobile.org/apidoc/groups.html#delete-group
     */
    delete: function() {
    }

  };

};
