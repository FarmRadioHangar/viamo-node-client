require('dotenv').config();

var viamoAPI = require('./lib');

//var viamo = viamoAPI({
//  api: { key: process.env.API_KEY }
//});

var viamo = viamoAPI(process.env.API_KEY);

viamo.languages.update(207546, {
  name: 'Portugese',
})
.then((res) => {
  return viamo.languages.get();
})
.then((res) => {
  res.data.languages.forEach((language) => {
    console.log(language.id + ' ' + language.name);
  });
})
.catch((error) => {
  console.error(error);
});

//viamo.languages.create({
//  name: 'Portugese',
//  abbreviation: 'PT'
//})
//.then((res) => {
//  if (200 == res.status) {
//    console.log(res.message);
//  }
//  return viamo.languages.get();
//})
//.then((res) => {
//  res.data.languages.forEach((language) => {
//    console.log(language.id + ' ' + language.name);
//  });
//})
//.catch((error) => {
//  console.error(error);
//});

//viamo.audioFiles.get(342555)
//.then((res) => {
//  console.log(res.data.audio_file);
//});

//viamo.surveys.get()
//.then((res) => {
//  console.log(res.pagination);
//  //res.data.surveys.forEach((survey) => {
//  //  console.log(survey.title);
//  //});
//})
//.catch((error) => {
//  console.log(error.cause.errno);
//});

//viamo.languages.get(206070)
//.then((res) => {
//  console.log(res.data);
//})
//.catch((error) => {
//  console.log(error.cause.errno);
//});

//viamo.languages.get()
//.then((res) => {
//  res.data.languages.map((language) => {
//    console.log(`${language.id} ${language.name}`);
//  });
//})
//.catch((error) => {
//  console.log(error.cause.errno);
//});

//viamo.subscribers.get({
//  limit: 2
//})
//.then((res) => {
//  console.log(res.data.subscribers); 
//  console.log(res.hasNextPage); 
//  //res.data.subscribers.forEach((subscriber) => {
//  //  console.log(subscriber);
//  //});
//})
////.then((res) => {
////  res.data.languages.forEach((language) => {
////    console.log(language.id + ': ' + language.name);
////  })
////})
//.catch((error) => {
//  console.dir(error);
//  // Handle error
//});
//
////viamo.ping()
////.then(function(res) {
////  console.log(res.more_info);
////})
////
////viamo.outgoingCalls.get({
////  limit: 5
////})
////.then(function next(res) {
////  res.data.outgoing_calls.forEach((call) => {
////    console.log(call.id);
////  });
////  if (res.hasNextPage) {
////    return res.nextPage().then(next);
////  }
////})
////.catch((error) => {
////  console.error(error);
////});
//
//viamo.messages.create({
//  title: 'Test'
//})
//.then((res) => {
//  console.log(res);
//})
//.catch((error) => {
//  console.log(error);
//  // Handle error
//});

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
