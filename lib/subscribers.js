module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.subscribers.create
     *
     * https://go.votomobile.org/apidoc/subscribers.html#create-subscriber
     */

    /*
     * viamo.subscribers.get
     *
     * https://go.votomobile.org/apidoc/subscribers.html#list-subscribers
     *
     * https://go.votomobile.org/apidoc/subscribers.html#list-subscriber-details
     */
    get: function() {
      return api.get('subscribers', arguments);
    },

    /*
     * viamo.subscribers.update
     *
     * https://go.votomobile.org/apidoc/subscribers.html#modify-subscriber-details
     */

    /*
     * viamo.subscribers.delete
     *
     * https://go.votomobile.org/apidoc/subscribers.html#delete-subscriber
     */

    /*
     * viamo.subscribers.groups
     */
    groups: {

      /*
       * viamo.subscribers.groups.get
       *
       * https://go.votomobile.org/apidoc/subscribers.html#list-subscribers-in-a-group
       */

    },

    /*
     * viamo.subscribers.phone
     */
    phone: {

      /*
       * viamo.subscribers.phone.search
       */

    }

  };

};
