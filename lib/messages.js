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
    }

  };

};
