module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.phoneNumbers.get
     */
    get: function() {
      return api.get('phone_numbers', arguments);
    }

  };

};

