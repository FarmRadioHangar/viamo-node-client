module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.messages.create
     *
     * https://go.votomobile.org/apidoc/messages.html#create-a-message
     */

    /*
     * viamo.messages.get
     *
     * https://go.votomobile.org/apidoc/messages.html#list-messages
     * https://go.votomobile.org/apidoc/messages.html#list-details-of-a-message
     */
    get: function() {
      return api.get('messages', arguments);
    },

    /*
     * viamo.messages.update
     *
     * https://go.votomobile.org/apidoc/messages.html#update-a-message
     */

    /*
     * viamo.messages.delete
     *
     * https://go.votomobile.org/apidoc/messages.html#delete-a-message
     */

    /*
     * viamo.messages.counts
     */
    counts: {

      /*
       * viamo.messages.counts.get
       *
       * https://go.votomobile.org/apidoc/messages.html#count-interactions-delivery-logs-for-a-message
       */
      get: function() {
      }

    }

  };

};
