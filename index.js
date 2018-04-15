require('dotenv').config();

var viamoAPI = require('./lib');
var sanitizer = require('./lib/sanitizer');

var viamo = viamoAPI({
  api: {
    url: 'https://go.votomobile.org/api/v1/',
    key: process.env.API_KEY
  }
});

viamo.surveys.create()
.then((res) => {
  console.log(res);
});

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
