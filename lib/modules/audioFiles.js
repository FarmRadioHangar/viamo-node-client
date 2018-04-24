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
     * viamo.audioFiles.upload
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#upload-an-audio-file
     */
    upload: function() {
    },

    /**
     * @instance 
     *
     * viamo.audioFiles.get
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-all-audio-files
     */

    /**
     * @instance 
     *
     * viamo.audioFiles.get
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     */
    get: function() {
      return api.get('audio_files', arguments);
    },

    /**
     * @instance
     *
     * viamo.audioFiles.update
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#replace-update-an-audio-file
     */
    update: function() {
    },

    /**
     * @instance
     *
     * viamo.audioFiles.delete
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     */
    delete: function() {
    },

    /**
     * @instance 
     * 
     * viamo.audioFiles.download
     *
     * @see https://go.votomobile.org/apidoc/audio_files.html#download-an-audio-file
     */
    download: function() {
    }

  };

};
