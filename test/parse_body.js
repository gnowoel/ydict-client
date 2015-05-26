var assert = require('chai').assert;
var ydictClient = require('..');

describe('parseBody', function() {
  it('should return parsed search result', function(done) {
    ydictClient._private.fetchPage('word', function(error, body) {
      var result = ydictClient._private.parseBody(body);
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      done();
    });
  });
});
