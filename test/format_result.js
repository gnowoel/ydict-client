var assert = require('chai').assert;
var lookupWord = require('../lib/lookup_word');
var formatResult = require('../lib/format_result');

describe('formatResult', function() {
  it('should format parsed result', function(done) {
    var keyword = 'word';
    lookupWord(keyword, function(error, result) {
      var formatted = formatResult(keyword, result);
      assert.include(formatted, 'KK: [\u001b[1mwɝd\u001b[22m] DJ: [\u001b[1mwə:d\u001b[22m]');
      done();
    });
  });
});
