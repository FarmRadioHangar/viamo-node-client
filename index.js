require('dotenv').config();

var viamoAPI = require('./lib');

var viamo = viamoAPI({
  api: {
    key: process.env.API_KEY
  },
  fullResponse: false
});

viamo.messages.create({
  title: 'Test'
})
.then((res) => {
  console.log(res);
})
.catch((error) => {
  console.log(error);
  // Handle error
});

//viamo.surveys.get()
//.then((res) => {
//  res.body.data.surveys.forEach((survey) => {
//    console.log(survey);
//  });
//})
//.catch((error) => {
//  console.log(error);
//  // Handle error
//});

//viamo.surveys.update({a: 5})
//.then((res) => {
//  res.data.surveys.forEach((survey) => {
//    console.log(survey.title);
//  });
//})
//.catch((error) => {
//  console.log('Handle!');
//});

//viamo.surveys.create({
//  hasVoice: false,
//  hasSms: false,
//  survey_title: 'A mild test survey'
//})
//.then((res) => {
//  console.log(res);
//})
//.catch((error) => {
//  // Handle error
//});

/*
viamo.surveys.get()
.then((res) => {
  console.log(res.status);
});
*/

//var opts3 = {
//  hasVoice: 'abx',
//  hasSms: false,
//  response_wait_time: 10
//};
//
//var opts2 = {
//  hasVoice: true,
//  hasSms: false,
//  response_wait_time: 10
//};
//
//var opts = {
//  hasVoice: true,
//  hasSms: false,
//  responseWaitTime: 10
//};
//
//console.log(sanitizer.params(opts, {
//  'has_voice': {
//    required: true,
//    alias: 'hasVoice',
//    format: sanitizer.BinChar
//  },
//  'has_sms': {
//    required: true,
//    alias: 'hasSms',
//    format: sanitizer.BinChar
//  },
//  'response_wait_time': {
//    alias: 'responseWaitTime'
//  }
//}));

//viamo.subscribers.get()
//.then((res) => {
//  console.log(res.data.subscribers.map(s => s.id));
//});
//
//viamo.subscribers.get(156560571)
//.then((res) => {
//  console.log(res.data.subscriber);
//});
