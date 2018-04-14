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
    },

    /*
     * viamo.surveys.results
     *
     * https://go.votomobile.org/apidoc/results.html#survey-results
     */
    results: {

      /*
       * viamo.surveys.results.get
       *
       * https://go.votomobile.org/apidoc/results.html#get-aggregate-survey-results
       */
      get: function() {
      }

    }

  };

};
