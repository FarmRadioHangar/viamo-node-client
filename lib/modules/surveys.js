/**
 * @module surveys
 *
 * @see http://go.votomobile.org/apidoc/surveys.html
 *
 * @desc
 *
 * ### Submodules
 *
 * * [surveys.results]{@link module:surveys^results}
 * * [surveys.conclusion]{@link module:surveys^conclusion}
 * * [surveys.counts]{@link module:surveys^counts}
 * * [surveys.deliveryLogs]{@link module:surveys^deliveryLogs}
 * * [surveys.introduction]{@link module:surveys^introduction}
 * * [surveys.questions]{@link module:surveys^questions}
 * * [surveys.questions.counts]{@link module:surveys^questions^counts}
 * * [surveys.questions.results]{@link module:surveys^questions^results}
 * * [surveys.results]{@link module:surveys^results}
 * * [surveys.subscribers]{@link module:surveys^subscribers}
 */
module.exports = function(config) {

  var api = require('../api')(config);

  return {

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/surveys.html#create-a-survey
     *
     * @desc Create a survey.
     *
     * This function takes as argument an object with query parameters to be
     * sent with the Viamo API request. The parameters available for this
     * request are:
     *
     * | Name               | Required | Type                | Default | Description |
     * | ------------------ | -------- | ------------------- | ------- | ----------- |
     * | `hasVoice`         | yes      | Boolean             |         | Indicate whether the survey contains a voice message. |
     * | `hasSms`           | yes      | Boolean             |         | Indicate whether the survey contains SMS content. |
     * | `surveyTitle`      | yes      | String              |         | The title of the survey |
     * | `responseWaitTime` | no       | Number              | 10      | The number of seconds to wait for a response to a question. |
     * | `questionRepeat`   | no       | Number              | 2       | The number of times a question should be repeated when no answer is given. |
     * | `webhookUrl`       | no       | String              |         | An URL to send updates to whenever a survey response is recorded. |
     * | `webhookMethod`    | no       | "GET"&nbsp;&vert;&nbsp;"POST" | GET     | HTTP request method used by the webhook. |
     * | `webhookSecret`    | no       | String              |         | A secret key or phrase that will be sent as a parameter with the webhook requests to validate that it comes from Viamo. |
     *
     * *Note:* The properties of this object can alternatively be specified in
     * underscore style (camel case), which is how they are sent in the final
     * request. (E.g., as `some_param` instead of `someParam`.)
     *
     * @param params {Object} - See above
     *
     * @example
     *
     * // Create a new survey
     *
     * viamo.surveys.create({
     *   hasVoice: true,
     *   hasSms: false,
     *   surveyTitle: 'A mild test survey'
     * })
     * .then((res) => {
     *   console.log(res.message);
     * })
     * .catch((error) => {
     *   // Handle error
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    create: function(params) {
      return Promise.resolve(api.params.normalize(params, {
        'has_voice': {
          required: true,
          format: api.params.BinChar,
          alias: 'hasVoice'
        },
        'has_sms': {
          required: true,
          format: api.params.BinChar,
          alias: 'hasSms'
        },
        'survey_title': {
          required: true,
          alias: 'surveyTitle'
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        },
        'question_repeat': {
          alias: 'questionRepeat'
        },
        'webhook_url': {
          alias: 'webhookUrl'
        },
        'webhook_method': {
          alias: 'webhookMethod'
        },
        'webhook_secret': {
          alias: 'webhookSecret'
        }
      }))
      .then(function(params) {
        return api.post('surveys', params);
      });
    },

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/surveys.html#list-all-surveys
     *
     * @desc List all surveys.
     *
     * @example
     *
     * // Show title of all surveys
     *
     * viamo.surveys.get()
     * .then((res) => {
     *   res.data.surveys.forEach((survey) => {
     *     console.log(survey.title);
     *   });
     * })
     * .catch((error) => {
     *   // Handle error
     * });
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */

    /**
     * @instance
     *
     * @method get
     *
     * @see https://go.votomobile.org/apidoc/surveys.html#list-survey-details
     *
     * @desc Get details of a survey.
     *
     * @param id {Number | String} - Survey ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    get: function() {
      return api.getResource('surveys', arguments);
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/surveys.html#update-a-survey
     *
     * @desc Update a survey.
     *
     * This function takes as the second argument an object with query
     * parameters to be sent with the Viamo API request. The parameters
     * available for this request are:
     *
     * | Name               | Type                | Description |
     * | ------------------ | ------------------- | ----------- |
     * | `hasVoice`         | Boolean             | Indicate whether the survey contains a voice message. |
     * | `hasSms`           | Boolean             | Indicate whether the survey contains SMS content. |
     * | `surveyTitle`      | String              | The title of the survey |
     * | `responseWaitTime` | Number              | The number of seconds to wait for a response to a question. |
     * | `questionRepeat`   | Number              | The number of times a question should be repeated when no answer is given. |
     * | `webhookUrl`       | String              | An URL to send updates to whenever a survey response is recorded. |
     * | `webhookMethod`    | "GET"&nbsp;&vert;&nbsp;"POST" | HTTP request method used by the webhook. |
     * | `webhookSecret`    | String              | A secret key or phrase that will be sent as a parameter with the webhook requests to validate that it comes from Viamo. |
     *
     * *Note:* The properties of this object can alternatively be specified in
     * underscore style (camel case), which is how they are sent in the final
     * request. (E.g., as `some_param` instead of `someParam`.)
     *
     * @param id {Number | String} - Survey ID
     * @param params {Object} - See above
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    update: function(id, params) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
        return api.params.normalize(params, {
          'has_voice': {
            format: api.params.BinChar,
            alias: 'hasVoice'
          },
          'has_sms': {
            format: api.params.BinChar,
            alias: 'hasSms'
          },
          'survey_title': {
            alias: 'surveyTitle'
          },
          'response_wait_time': {
            alias: 'responseWaitTime'
          },
          'question_repeat': {
            alias: 'questionRepeat'
          },
          'webhook_url': {
            alias: 'webhookUrl'
          },
          'webhook_method': {
            alias: 'webhookMethod'
          },
          'webhook_secret': {
            alias: 'webhookSecret'
          }
        });
      })
      .then(function(params) {
        return api.put(`surveys/${id}`, params);
      });
    },

    /**
     * @instance
     *
     * @see https://go.votomobile.org/apidoc/surveys.html#delete-a-survey
     *
     * @desc Delete a survey.
     *
     * @param id {Number | String} - Survey ID
     *
     * @returns A Promise that resolves to the response object from Viamo.
     */
    delete: function(id) {
      return Promise.resolve(function() {
        if (!id) {
          throw new Error('ID is required.');
        }
        if ('number' !== typeof(id) && 'string' !== typeof(id)) {
          throw new Error('ID must be a number or string.');
        }
      })
      .then(function() {
        return api.delete(`surveys/${id}`);
      });
    },

    /**
     * @module surveys^results
     *
     * @see https://go.votomobile.org/apidoc/results.html#survey-results
     */
    results: {

      /**
       * @instance
       *
       * @memberof module:surveys^results
       *
       * @see https://go.votomobile.org/apidoc/results.html#get-aggregate-survey-results
       *
       * @desc
       *
       * Get aggregate results (summary statistics) for all questions in a survey.
       */
      get: function() {
      }

    },

    /**
     * @module surveys^questions
     */
    questions: {

//      /**
//       * viamo.surveys.questions.create
//       * @instance
//       *
//       * @see https://go.votomobile.org/apidoc/surveys.html#create-a-survey-question
//       */
//      create: function() {
//      },
//
//      /**
//       * viamo.surveys.questions.get
//       * @instance
//       *
//       * @see https://go.votomobile.org/apidoc/surveys.html#list-survey-questions
//       * @see https://go.votomobile.org/apidoc/surveys.html#get-survey-question-details
//       */
//      get: function() {
//      },
//
//      /**
//       * viamo.surveys.questions.delete
//       * @instance
//       *
//       * @see https://go.votomobile.org/apidoc/surveys.html#delete-a-question
//       */

      /**
       * @module surveys^questions^results
       */
      results: {

//        /**
//         * viamo.surveys.questions.results.get
//         * @instance
//         *
//         * @see https://go.votomobile.org/apidoc/results.html#get-all-responses-to-a-survey-question
//         *
//         * @desc
//         *
//         * Retrieve all responses to a single survey question (optionally
//         * filtered by date range).
//         */
//        get: function() {
//        }

      },

      /**
       * @module surveys^questions^counts
       */
      counts: {

//        /**
//         * viamo.surveys.questions.counts
//         * @instance
//         *
//         * @see http://go.votomobile.org/apidoc/results.html#count-all-responses-to-a-survey-question
//         *
//         * @desc
//         *
//         * Count all responses to a single survey question (optionally filtered
//         * by date range). Returns the number of unique respondents
//         * (subscribers), and the number of individual responses (in case a
//         * subscriber answered the survey more than once).
//         */
//        get: function() {
//        }

      }

    },

    /**
     * @module surveys^conclusion
     */
    conclusion: {

//      /**
//       * viamo.surveys.conclusion.create
//       * @instance
//       *
//       * @see https://go.votomobile.org/apidoc/surveys.html#add-a-survey-conclusion
//       */
//      create: function() {
//      }

    },

    /**
     * @module surveys^introduction
     */
    introduction: {

      /**
       * viamo.surveys.introduction.create
       * @instance
       *
       * @see https://go.votomobile.org/apidoc/surveys.html#add-a-survey-introduction
       */
      create: function() {
      }

    },

    /**
     * @module surveys^deliveryLogs
     */
    deliveryLogs: {

//      /**
//       * viamo.surveys.deliveryLogs.get
//       *
//       * @instance
//       * @memberof surveys.deliveryLogs
//       * @method get
//       *
//       * @desc
//       *
//       * Get all delivery logs (call records) related to a specific survey.
//       * Optionally filter by subscriber, delivery status, and date range.
//       *
//       * @see https://go.votomobile.org/apidoc/delivery_logs.html#get-delivery-logs-for-a-survey
//       */
//
//      get: function() {
//      }
//
//      ///*
//      // * viamo.surveys.deliveryLogs.get
//      // * @instance
//      // *
//      // * @desc
//      // *
//      // * Retrieve a subscriber’s responses to a survey within one delivery log.
//      // * This returns all responses for a subscriber that took place within a
//      // * single call or SMS conversation.
//      // *
//      // * @see https://go.votomobile.org/apidoc/results.html#get-survey-responses-for-one-delivery-log
//      // */
    },

    /**
     * @module surveys^counts
     */
    counts: {

//      /**
//       * viamo.surveys.counts.get
//       * @instance
//       *
//       * Count the number of delivery logs (individual subscriber interactions)
//       * associated with a survey. You can optionally filter by delivery status
//       * and by date/time range.
//       *
//       * @see https://go.votomobile.org/apidoc/results.html#count-interactions-delivery-logs-for-a-survey
//       */
//      get: function() {
//      }

    },

    /**
     * @module surveys^subscribers
     */
    subscribers: {

      /**
       * @instance
       *
       * Retrieve all of single subscriber’s responses to a survey. This
       * subscriber may have interacted with the survey multiple times, so this
       * returns responses within an array of delivery_logs.
       *
       * @see https://go.votomobile.org/apidoc/results.html#get-survey-responses-for-one-subscriber
       */
      get: function() {
      }

    }

  };

};
