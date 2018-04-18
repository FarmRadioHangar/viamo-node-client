var contype = require('content-type');
var join    = require('url-join');
var rp      = require('request-promise');

module.exports = function(config) {

  var request = function(uri, params, options) {
    options = options || {};
    options.qs = params || {};
    options.uri = options.uri || join(config.api.url, uri);
    options.headers = options.headers || {};
    options.resolveWithFullResponse = config.fullResponse;
    options.headers['api_key'] = config.api.key;
    options.transform = function(body, response, full) {
      if (contype.parse(response).type === 'application/json') {
        if (full) {
          var res = response;
          res.body = JSON.parse(response.body);
          return res;
        } else {
          return JSON.parse(body);
        }
      } else {
        return full ? response : body;
      }
    };
    return rp(options);
  }

  return {

    get: function(resource, params) {
      return request(resource, params);
    },

    post: function(resource, params, data) {
      var options = {method: 'POST'};
      if (data) {
        options.body = data;
      }
      return request(resource, params, options);
    },

    put: function(resource, params, data) {
      var options = {method: 'PUT'};
      if (data) {
        options.body = data;
      }
      return request(resource, params, options);
    },

    delete: function(resource, params) {
      var options = {method: 'DELETE'};
      return request(resource, params, options);
    },

    params: require('./params')

  };

};
