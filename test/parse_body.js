var assert = require('chai').assert;
var ydictClient = require('..');
var fetchPage = require('../lib/fetch_page');

describe('parseBody', function() {
  it('should return parsed search result', function(done) {
    fetchPage('word', function(error, body) {
      var result = ydictClient._private.parseBody(body);
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      done();
    });
  });
});
