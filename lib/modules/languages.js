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
     * This function takes as argument an object with query parameters to be
     * sent with the Viamo API request. The parameters available for this
     * request are:
     *
     * | Name         | Required | Type       | Description            |
     * | ------------ | -------- | ---------- | ---------------------- |
     * | name         | Yes      | String     |                        |
     * | abbreviation | No       | String     | E.g., "EN" for English |
     *
     * @param params {Object} - See above
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
      return Promise.resolve(api.params.normalize(params, {
        'language_name': {
          required: true,
          alias: 'name'
        },
        'language_abbreviation': {
          alias: 'abbreviation'
        }
      }))
      .then(function(params) {
        return api.post('languages', params);
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
      var arg0 = arguments[0];
      if ('number' === typeof(arg0) || 'string' === typeof(arg0)) {
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
    update: function(id) {
      if (!id) {
        return Promise.reject(new Error('ID is required.'));
      }
      //
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
    delete: function(id) {
      if (!id) {
        return Promise.reject(new Error('ID is required.'));
      }
      return api.delete(`languages/${id}`);
    }

  };

};
