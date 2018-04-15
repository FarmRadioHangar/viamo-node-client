var join = require('url-join');
var rp   = require('request-promise');

module.exports = function(config) {

  return {

    get: function(resource, params) {
      var qs = params;
      var options = {
        uri: join(config.api.url, uri),
        qs: qs,
        headers: {
          api_key: config.api.key
        },
        json: true
      };
      return rp(options);
    },

    post: function(resource, data, params) {
    }

  };

};
