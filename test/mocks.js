var nock = require('nock');

var url = 'https://go.votomobile.org/api/v1';

nock(url)
.get(/languages\/206069/)
.reply(200, {
  status: 200,
  code: 1000,
  data: { language: { id: '206069', name: 'English', abbreviation: 'EN' } },
  message: 'Language Details Fetched Successfully',
  more_info: '',
  pagination: null,
  url: 'https://go.votomobile.org/api/v1/languages/206069' 
});

nock(url)
.get(/surveys.*/)
.reply(200, {
  status: 200,
  code: 1000,
  data: {
    surveys: [{
      id: "200255",
      has_voice: "1",
      has_sms: "1",
      title: "Example Survey",
      num_questions: "3",
      repeat_times: "2",
      subscribers_answered: "0",
      questions_answered: "0",
      has_conclusion: "1",
      has_introduction: "0",
      webhook_url: "http://requestb.in/17rmyum1",
      webhook_method: "GET",
      webhook_secret: "",
      created_at: "2014-03-08 23:33:46",
      updated_at: "2014-03-08 23:37:58"
    },
    {
      id: "200259",
      has_voice: "1",
      has_sms: "1",
      title: "Int'l Women's Day Survey",
      num_questions: "1",
      repeat_times: "2",
      subscribers_answered: "0",
      questions_answered: "0",
      has_conclusion: "0",
      has_introduction: "0",
      webhook_url: "http://requestb.in/17rmyum1",
      webhook_method: "GET",
      webhook_secret: "",
      created_at: "2014-03-09 00:02:52",
      updated_at: "2014-03-09 00:02:53"
    }]
  },
  message: "Surveys fetched successfully",
  more_info: ""
}).persist();

nock(url)
.post(/surveys.*/)
.reply(200, {
  "status": 200,
  "message": "Survey Created",
  "data": 21122
});
