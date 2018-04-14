module.exports = function(config) {

  var api = require('./api')(config);

  return {

    /*
     * viamo.surveys.create
     *
     * https://go.votomobile.org/apidoc/surveys.html#create-a-survey
     */

    /*
     * viamo.surveys.get
     *
     * https://go.votomobile.org/apidoc/surveys.html#list-all-surveys
     * https://go.votomobile.org/apidoc/surveys.html#list-survey-details
     */
    get: function() {
      return api.get('surveys', arguments);
    }

  };

};
