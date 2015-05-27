var assert = require('chai').assert;
var fetchPage = require('../lib/fetch_page');
var parseBody = require('../lib/parse_body');

describe('parseBody', function() {
  it('should return parsed search result', function(done) {
    fetchPage('word', function(error, body) {
      var result = parseBody(body);
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      done();
    });
  });
});
