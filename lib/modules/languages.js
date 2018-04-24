/**
 * @module languages
 *
 * @see https://go.votomobile.org/apidoc/languages.html
 *
 * @desc API to manage languages in the Viamo platform programmatically.
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/languages.html#create-languages
     *
     * @desc Add a new language.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    create: function() {
    },

    /** 
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/languages.html#list-languages
     *
     * @desc List languages.
     *
     * @example
     *
     * // List names of available languages
     *
     * viamo.languages.get()
     * .then((res) => {
     *   res.data.languages.forEach((language) => {
     *     console.log(language.name);
     *   });
     * })
     * .catch((error) => {
     *   // Handle error
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */

    /** 
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/languages.html#list-language-details
     *
     * @desc Get details of a language.
     *
     * @param id {Number | String} - Language ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      var arg0 = arguments[0];
      if ('number' === arg0 || 'string' === arg0) {
        return api.get(`languages/${arg0}`, arguments[1]);
      }
      return api.get('languages', arg0);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/languages.html#modify-language-details
     *
     * @desc Update a language.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function() {
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/languages.html#delete-language
     *
     * @desc Delete a language.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function() {
    }

  };

};
