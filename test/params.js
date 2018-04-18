var assert  = require('assert');
var chai    = require('chai');
var expect  = require('chai').expect;
var params  = require('../lib/params');

chai.should();

describe('params.normalize', function() {

  describe('string instead of truthy value', function() {

    it('should throw an exception', function() {
      var options = {
        hasVoice: 'moose',
        hasSms: false,
        response_wait_time: 10
      };
      var rules = {
        'has_voice': {
          required: true,
          alias: 'hasVoice',
          format: params.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: params.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(params.normalize.bind(null, options, rules)).to.throw(
        'Truthy value expected for parameter hasVoice'
      );
    });

  });

  describe('missing required parameter', function() {

    it('should throw an exception', function() {
      var options = {
        hasVoice: true,
        response_wait_time: 10
      };
      var rules = {
        'has_voice': {
          required: true,
          alias: 'hasVoice',
          format: params.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: params.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(params.normalize.bind(null, options, rules)).to.throw(
        'Parameter has_sms is required'
      );
    });

  });

  describe('valid options', function() {

    var result = {
      'has_sms': '0',
      'has_voice': '1',
      'response_wait_time': 10
    };

    it('should be sanitized', function() {
      var options = {
        hasVoice: true,
        hasSms: false,
        response_wait_time: 10
      };
      var rules = {
        'has_voice': {
          required: true,
          alias: 'hasVoice',
          format: params.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: params.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(params.normalize(options, rules)).to.deep.equal(result);
    });

  });

});
