/**
 * @module prompts
 *
 * @see https://go.votomobile.org/apidoc/prompts.html
 *
 * @desc 
 *
 * Prompts are reusable elements that enable organisations to setup default 
 * actions that should occur in special cases in order to prompt a subscriber 
 * to take some action.
 *
 * ### Submodules
 *
 * * [prompts.languages.selectors]{@link module:prompts^languages^selectors}
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @module prompts^languages
     *
     * @ignore
     */
    languages: {

      /**
       * @module prompts^languages^selectors
       *
       * @see https://go.votomobile.org/apidoc/prompts.html#language-selectors
       */
      selectors: {

        /**
         * @instance
         *
         * @see https://go.votomobile.org/apidoc/prompts.html#create-a-language-selector
         */
        create: function() {
        },

        /**
         * @instance
         *
         * @method get
         *
         * @see https://go.votomobile.org/apidoc/prompts.html#list-language-selectors
         *
         * @desc List language selectors.
         *
         * @returns A Promise that resolves to the response object from Viamo.
         */

        /**
         * @instance
         *
         * @method get
         *
         * @see https://go.votomobile.org/apidoc/prompts.html#list-language-selector-details
         *
         * @desc Get details of a language selector.
         *
         * @param id {Number | String} - Language selector ID
         *
         * @returns A Promise that resolves to the response object from Viamo.
         */
        get: function() {
          var arg0 = arguments[0];
          if ('number' === arg0 || 'string' === arg0) {
            return api.get(`prompts/languages/selectors/${arg0}`, arguments[1]);
          }
          return api.get('prompts/languages/selectors', arg0);
        },

        /**
         * @instance
         *
         * viamo.prompts.languages.selectors.delete
         *
         * @see https://go.votomobile.org/apidoc/prompts.html#delete-language-selector
         */
        delete: function() {
        }

      }

    }

  };

};
