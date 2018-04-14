require('dotenv').config();

var viamoAPI = require('./lib');

var viamo = viamoAPI({
  api: {
    url: 'https://go.votomobile.org/api/v1/',
    key: process.env.API_KEY
  }
});

viamo.subscribers.get()
.then((res) => {
  console.log(res.data.subscribers.map(s => s.id));
});

viamo.subscribers.get(156560571)
.then((res) => {
  console.log(res.data.subscriber);
});
