var assert   = require('assert');
var chai     = require('chai');
var expect   = require('chai').expect;
var surveys  = require('../lib/modules/languages');
var viamoAPI = require('../lib/index');

require('./mocks');

chai.should();

var viamoUrl = 'https://go.votomobile.org/api/v1/';

var viamo = viamoAPI({
  url: viamoUrl,
  key: 'test'
});

describe('languages', function() {

  it('should return a 200 OK status code', function() {
    return viamo.languages.get(206069)
    .then((res) => {
      expect(res.status).to.equal(200);
    })
  });

});
 
