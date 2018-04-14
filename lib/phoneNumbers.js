module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.phoneNumbers.get
     */
    get: function(params) {
      return api.get('phone_numbers', params);
    }

  };

};

