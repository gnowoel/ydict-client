var assert = require('chai').assert;
var lookupWord = require('../lib/lookup_word');

describe('lookupWord', function() {
  it('should return definition of a searched word', function(done) {
    var word = 'word';
    lookupWord(word, function(error, result) {
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      assert.equal(result.variants.join(','), 'words,worded,worded,wording');
      done();
    });
  });

  it('should auto-correct spelling', function(done) {
    var word = 'dictionar';
    var corrected = 'dictionary';
    lookupWord(word, function(error, result) {
      assert.equal(result.suggestion, corrected);
      done();
    });
  });
});
