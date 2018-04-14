require('dotenv').config();

var viamo = require('./lib');

var api = viamo({
  api: {
    url: 'https://go.votomobile.org/api/v1/',
    key: process.env.API_KEY
  }
});

api.surveys.get()
.then((res) => {
  console.log(res);
});
