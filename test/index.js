var assert    = require('assert');
var chai      = require('chai');
var expect    = require('chai').expect;
var sanitizer = require('../lib/sanitizer');

chai.should();

describe('sanitizer.params', function() {

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
          format: sanitizer.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: sanitizer.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(sanitizer.params.bind(null, options, rules)).to.throw(
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
          format: sanitizer.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: sanitizer.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(sanitizer.params.bind(null, options, rules)).to.throw(
        'Parameter has_sms is required'
      );
    });

  });

  describe('test', function() {

    var result = {
      'has_sms': '0',
      'has_voice': '1',
      'response_wait_time': 10
    };

    it('should equal ' + JSON.stringify(result), function() {
      var options = {
        hasVoice: true,
        hasSms: false,
        response_wait_time: 10
      };
      var rules = {
        'has_voice': {
          required: true,
          alias: 'hasVoice',
          format: sanitizer.BinChar
        },
        'has_sms': {
          required: true,
          alias: 'hasSms',
          format: sanitizer.BinChar
        },
        'response_wait_time': {
          alias: 'responseWaitTime'
        }
      };
      expect(sanitizer.params(options, rules)).to.deep.equal(result);
    });

  });

});
