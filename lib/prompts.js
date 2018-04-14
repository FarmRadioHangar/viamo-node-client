module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.prompts.language
     */
    language: {

      /*
       * viamo.prompts.language.selectors
       *
       * https://go.votomobile.org/apidoc/prompts.html#language-selectors
       */
      selectors: {

        /*
         * viamo.prompts.language.selectors.get
         *
         * https://go.votomobile.org/apidoc/prompts.html#list-language-selectors
         */
        get: function() {
        }

      }

    }

  };

};
