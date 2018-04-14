module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.audioFiles.get
     */
    get: function(params) {
      return api.get('audio_files', params);
    }

  };

};

