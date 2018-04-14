module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.audioFiles.upload
     *
     * https://go.votomobile.org/apidoc/audio_files.html#upload-an-audio-file
     */

    /*
     * viamo.audioFiles.get
     *
     * https://go.votomobile.org/apidoc/audio_files.html#list-all-audio-files
     * https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     */
    get: function() {
      return api.get('audio_files', arguments);
    }

    /*
     * viamo.audioFiles.update
     *
     * https://go.votomobile.org/apidoc/audio_files.html#replace-update-an-audio-file
     */

    /*
     * viamo.audioFiles.delete
     *
     * https://go.votomobile.org/apidoc/audio_files.html#list-details-of-an-audio-file
     */

  };

};
