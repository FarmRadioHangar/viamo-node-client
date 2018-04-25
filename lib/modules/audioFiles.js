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
      var arg0 = arguments[0];
      if ('number' === typeof(arg0) || 'string' === typeof(arg0)) {
        return api.get(`audio_files/${arg0}`, arguments[1]);
      }
      return api.get('audio_files', arg0);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#replace-update-an-audio-file
     *
     * @desc Update an audio file.
     *
     * @param id {Number | String} - Audio file ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id, params) {
      if (!id) {
        return Promise.reject(new Error('Audio file ID is required.'));
      }
      //
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
      if (!id) {
        return Promise.reject(new Error('Audio file ID is required.'));
      }
      //
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
      if (!id) {
        return Promise.reject(new Error('Audio file ID is required.'));
      }
      //
    }

  };

};
