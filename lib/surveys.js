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

    },

    /*
     * viamo.surveys.questions
     */
    questions: {

      /*
       * viamo.surveys.questions.create
       *
       * https://go.votomobile.org/apidoc/surveys.html#create-a-survey-question
       */
      create: function() {
      }

    },

    /*
     * viamo.surveys.conclusion
     */
    conclusion: {

      /*
       * viamo.surveys.conclusion.create
       *
       * https://go.votomobile.org/apidoc/surveys.html#add-a-survey-conclusion
       */
      create: function() {
      }

    },

    /*
     * viamo.surveys.introduction
     */
    introduction: {

      /*
       * viamo.surveys.introduction.create
       *
       * https://go.votomobile.org/apidoc/surveys.html#add-a-survey-introduction
       */
      create: function() {
      }

    }

  };

};
