var join = require('url-join');
var rp   = require('request-promise');

module.exports = function(config) {

  var _get = function(uri, params) {
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
  }

  return {

    get: function(resource, args) {
      switch (args.length) {
        case 0:
          return _get(resource);
        case 1:
          if ('object' === typeof(args[0])) {
            return _get(resource, args[0]);
          }
          // Fall through
        default:
          return _get(`${resource}/${args[0]}`, args[1]);
      }
    }

  };

};
