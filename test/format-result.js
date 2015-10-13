var assert = require('chai').assert;
var lookupWord = require('../lib/lookup-word');
var formatResult = require('../lib/format-result');

describe('formatResult', function() {
  it('should format parsed result', function(done) {
    var word = 'word';
    lookupWord(word, function(error, result) {
      var formatted = formatResult(word, result);
      assert.include(formatted, 'KK: [\u001b[1mwɝd\u001b[22m] DJ: [\u001b[1mwə:d\u001b[22m]');
      assert.include(formatted, 'He threw in a \u001b[1mword\u001b[22m or two now and again.');
      assert.include(formatted, 'I cannot remember the \u001b[1mwords\u001b[22m of the song.');
      done();
    });
  });

  it('should highlight key words regardless of letter case', function(done) {
    var word = 'advice';
    lookupWord(word, function(error, result) {
      var formatted = formatResult(word, result);
      assert.include(formatted, '\u001b[1mAdvices\u001b[22m');
      done();
    });
  });
});
