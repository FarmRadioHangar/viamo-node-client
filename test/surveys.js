var assert   = require('assert');
var chai     = require('chai');
var expect   = require('chai').expect;
var surveys  = require('../lib/surveys');
var viamoAPI = require('../lib/index');

require('./mocks');

chai.should();

var viamoUrl = 'https://go.votomobile.org/api/v1/';

var viamo = viamoAPI({
  api: {
    url: viamoUrl,
    key: 'test',
    fullResponse: true
  }
});

//describe('surveys', function() {
//
//  describe('create', function() {
//
//  });
//
//});

describe('surveys', function() {

  it('should return a 200 OK status code', function() {
    return viamo.surveys.get()
    .then((res) => {
      //console.log(res);
      expect(res.statusCode).to.equal(200);
    });
  });

  //describe('list all', function(done) {

  //  return viamo.surveys.get()
  //  .then((res) => {

  //    expect(res.status).to.equal(200);

  //  })
  //  .catch((error) => {
  //    // Handle error
  //  });

  //});

});

//describe('surveys', function() {
//
//  describe('get details', function() {
//
//  });
//
//});

