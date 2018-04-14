require('dotenv').config();

var viamoAPI = require('./lib');

var viamo = viamoAPI({
  api: {
    url: 'https://go.votomobile.org/api/v1/',
    key: process.env.API_KEY
  }
});

viamo.surveys.get()
.then((res) => {
  console.log(res.data.surveys.length); //surveys.map(survey => survey.title));
});
