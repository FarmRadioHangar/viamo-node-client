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
     * viamo.surveys.delete
     *
     * https://go.votomobile.org/apidoc/surveys.html#delete-a-question
     */

    /*
     * viamo.surveys.results
     *
     * https://go.votomobile.org/apidoc/results.html#survey-results
     */
    results: {

      /*
       * viamo.surveys.results.get
       *
       * Get aggregate results (summary statistics) for all questions in a survey.
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
       * viamo.surveys.questions.get
       *
       * https://go.votomobile.org/apidoc/surveys.html#list-survey-questions
       * https://go.votomobile.org/apidoc/surveys.html#get-survey-question-details
       */
      get: function() {
      },

      /*
       * viamo.surveys.questions.create
       *
       * https://go.votomobile.org/apidoc/surveys.html#create-a-survey-question
       */
      create: function() {
      }

      /*
       * viamo.surveys.questions.delete
       *
       * https://go.votomobile.org/apidoc/surveys.html#delete-a-question
       */

      /*
       * viamo.surveys.questions.results
       */
      results: {

        /*
         * viamo.surveys.questions.results.get
         *
         * Retrieve all responses to a single survey question (optionally 
         * filtered by date range).
         *
         * https://go.votomobile.org/apidoc/results.html#get-all-responses-to-a-survey-question
         */
        get: function() {
        }

      },

      /*
       * viamo.surveys.questions.counts
       */
      counts: {

        /*
         * viamo.surveys.questions.counts
         *
         * Count all responses to a single survey question (optionally filtered 
         * by date range). Returns the number of unique respondents 
         * (subscribers), and the number of individual responses (in case a 
         * subscriber answered the survey more than once). 
         */
        get: function() {
        }

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

    },

    /*
     * viamo.surveys.deliveryLogs
     */
    deliveryLogs: {

      /*
       * viamo.surveys.deliveryLogs.get
       *
       * Get all delivery logs (call records) related to a specific survey. 
       * Optionally filter by subscriber, delivery status, and date range.
       *
       * https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-a-survey
       *
       * Retrieve a subscriber’s responses to a survey within one delivery log. 
       * This returns all responses for a subscriber that took place within a 
       * single call or SMS conversation.
       *
       * https://go.votomobile.org/apidoc/results.html#get-survey-responses-for-one-delivery-log
       */
      get: function() {
      }

    },

    /*
     * viamo.surveys.counts
     */
    counts: {

      /*
       * viamo.surveys.counts.get
       *
       * Count the number of delivery logs (individual subscriber interactions) 
       * associated with a survey. You can optionally filter by delivery status 
       * and by date/time range.
       *
       * https://go.votomobile.org/apidoc/results.html#count-interactions-delivery-logs-for-a-survey
       */
      get: function() {
      }

    },

    /*
     * viamo.surveys.subscribers
     */
    subscribers: {

      /*
       * viamo.surveys.subscribers.get
       *
       * Retrieve all of single subscriber’s responses to a survey. This 
       * subscriber may have interacted with the survey multiple times, so this 
       * returns responses within an array of delivery_logs.
       *
       * https://go.votomobile.org/apidoc/results.html#get-survey-responses-for-one-subscriber
       */
      get: function() {
      }

    }

  };

};
