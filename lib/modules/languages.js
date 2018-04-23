/**
 * @module languages
 *
 * @see https://go.votomobile.org/apidoc/languages.html
 *
 * @desc TODO
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * viamo.languages.create
     *
     * @see https://go.votomobile.org/apidoc/languages.html#create-languages
     */
    create: function() {
    },

    /** 
     * @instance
     *
     * viamo.languages.get
     *
     * @see https://go.votomobile.org/apidoc/languages.html#list-languages
     * @see https://go.votomobile.org/apidoc/languages.html#list-language-details
     */
    get: function() {
      return api.get('languages', arguments);
    },

    /**
     * @instance
     *
     * viamo.languages.update
     *
     * @see https://go.votomobile.org/apidoc/languages.html#modify-language-details
     */
    update: function() {
    },

    /**
     * @instance
     *
     * viamo.languages.delete
     *
     * @see https://go.votomobile.org/apidoc/languages.html#delete-language
     */
    delete: function() {
    }

  };

};
