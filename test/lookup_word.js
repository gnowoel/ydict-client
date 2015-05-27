var assert = require('chai').assert;
var lookupWord = require('../lib/lookup_word');

describe('lookupWord', function() {
  it('should return definition of searched word', function(done) {
    var word = 'word';
    lookupWord(word, function(error, result) {
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      done();
    });
  });
});
