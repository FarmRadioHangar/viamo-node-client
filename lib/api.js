var contype = require('content-type');
var join    = require('url-join');
var qs      = require('querystring');
var rp      = require('request-promise');
var url     = require('url');

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

  var publ = {

    get: function(resource, params) {
      return request(resource, params)
      .then(function(response) {
        var pagination = config.fullResponse 
          ? response.body.pagination 
          : response.pagination;
        if (pagination) {
          var cursor = function(move) {
            if (pagination[move + 'URL']) {
              var queryparams = qs.parse(url.parse(pagination[move + 'URL']).query);
              response[move + 'Page'] = function() {
                return publ.get(resource, Object.assign({}, params, {
                  page_after: queryparams.page_after
                }));
              }
              response['has' + move[0].toUpperCase() + move.substr(1) + 'Page'] = true;
            }
          }
          cursor('next');
          cursor('previous');
        }
        return response;
      });
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

  return publ;

};
