module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.languages.create
     *
     * https://go.votomobile.org/apidoc/languages.html#create-languages
     */

    /*
     * viamo.languages.get
     *
     * https://go.votomobile.org/apidoc/languages.html#list-languages
     * https://go.votomobile.org/apidoc/languages.html#list-language-details
     */
    get: function() {
      return api.get('languages', arguments);
    }

  };

};
