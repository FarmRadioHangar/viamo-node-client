/**
 * @module audioFiles
 *
 * @see http://go.votomobile.org/apidoc/audio_files.html
 *
 * @desc
 *
 * The audio files API defines access to audio file segments to use for 
 * messages, survey questions, menus, etc. Audio content can be provided in 
 * multiple languages.
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#upload-an-audio-file
     */
    upload: function() {
    },

    /**
     * @instance 
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-all-audio-files
     *
     * @desc List all audio files.
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */

    /**
     * @instance 
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     *
     * @desc Get details of an audio file.
     *
     * @param id {Number | String} - Audio file ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      return api.getResource('audio_files', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#replace-update-an-audio-file
     *
     * @desc Update an audio file.
     *
     * @param id {Number | String} - Audio file ID
     * @param params {Object} - An object with query parameters to be sent with 
     *                          the Viamo API request. The query parameters 
     *                          available for this request are:
     *
     * | Name               | Required | Type                | Description |
     * | ------------------ | ---------| ------------------- | ----------- |
     * | format             | Yes      | String              |             |
     * | description        | No       | String              |             |
     * | languageId         | No       | Number              |             |
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id, params) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
      })
      .then(function(params) {
        return api.put(`audio_files/${id}`, params);
      });
    },

    /**
     * @instance
     *
     * viamo.audioFiles.delete
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     *
     * @desc Delete an audio file.
     *
     * @param id {Number | String} - Audio file ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function(id) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
      })
      .then(function() {
        return api.delete(`audio_files/${id}`);
      });
    },

    /**
     * @instance 
     * 
     * viamo.audioFiles.download
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#download-an-audio-file
     *
     * @desc Download an audio file.
     *
     * @param id {Number | String} - Audio file ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    download: function(id) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
      });
    }

  };

};
