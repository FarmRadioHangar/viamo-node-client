/**
 * @module prompts
 *
 * @see https://go.votomobile.org/apidoc/prompts.html
 */
module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.prompts.languages
     */
    languages: {

      /*
       * viamo.prompts.languages.selectors
       *
       * https://go.votomobile.org/apidoc/prompts.html#language-selectors
       */
      selectors: {

        /*
         * viamo.prompts.languages.selectors.create
         *
         * https://go.votomobile.org/apidoc/prompts.html#create-a-language-selector
         */
        create: function() {
        },

        /*
         * viamo.prompts.languages.selectors.get
         *
         * https://go.votomobile.org/apidoc/prompts.html#list-language-selectors
         * https://go.votomobile.org/apidoc/prompts.html#list-language-selector-details
         */
        get: function() {
        },

        /*
         * viamo.prompts.languages.selectors.delete
         *
         * https://go.votomobile.org/apidoc/prompts.html#delete-language-selector
         */
        delete: function() {
        }

      }

    }

  };

};
