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
      return api.getResource('groups', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/groups.html#modify-group-details
     *
     * @param id {Number | String} - Group ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
        return api.params.normalize(params, {
        });
      })
      .then(function(params) {
        return api.put(`groups/${id}`, params);
      });
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/groups.html#delete-group
     *
     * @param id {Number | String} - Group ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function(id) {
      if (!id) {
        return Promise.reject(new Error('Group ID is required.'));
      }
      //
    }

  };

};
