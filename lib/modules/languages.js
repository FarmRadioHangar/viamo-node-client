/**
 * @module languages
 *
 * @see https://go.votomobile.org/apidoc/languages.html
 *
 * @desc API to programmatically manage languages in the Viamo platform.
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
     * @param params {Object} - An object with query parameters to be sent with 
     *                          the Viamo API request. The query parameters 
     *                          available for this request are:
     *
     * | Name           | Required | Type       | Description            |
     * | -------------- | -------- | ---------- | ---------------------- |
     * | `name`         | Yes      | String     | Name of the language.  |
     * | `abbreviation` | No       | String     | E.g., "EN" for English |
     *
     * @example
     *
     * // Add a new language
     *
     * viamo.languages.create({
     *   name: 'Amharic',
     *   abbreviation: 'AM'
     * })
     * .then((res) => {
     *   if (200 == res.status) {
     *     console.log(res.message);
     *   }
     *   return viamo.languages.get();
     * })
     * .then((res) => {
     *   res.data.languages.forEach((language) => {
     *     console.log(language.name);
     *   });
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    create: function(params) {
      return api.createResource('languages', params, {
        'language_name': {
          required: true,
          alias: 'name'
        },
        'language_abbreviation': {
          alias: 'abbreviation'
        }
      });
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
     * @example
     *
     * // Show details of a language
     *
     * viamo.languages.get(206069) // Replace with a valid language ID
     * .then((res) => {
     *   console.log(res.data.language);
     * })
     * .catch((error) => {
     *   // Handle error
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      return api.getResource('languages', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/languages.html#modify-language-details
     *
     * @desc Update a language.
     *
     * @param id {Number | String} - Language ID
     * @param params {Object} - An object with query parameters to be sent with 
     *                          the Viamo API request. The query parameters 
     *                          available for this request are:
     *
     * | Name           | Type       | Description            |
     * | -------------- | ---------- | ---------------------- |
     * | `name`         | String     | Name of the language.  |
     * | `abbreviation` | String     | E.g., "EN" for English |
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id, params) {
      return api.updateResource('languages', id, params, {
        'language_name': {
          alias: 'name'
        },
        'language_abbreviation': {
          alias: 'abbreviation'
        }
      });
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/languages.html#delete-language
     *
     * @desc Delete a language.
     *
     * @param id {Number | String} - Language ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function(id) {
      return api.deleteResource('languages', id);
    }

  };

};
