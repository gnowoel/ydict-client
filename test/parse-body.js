var assert = require('chai').assert;
var fetchPage = require('../lib/fetch-page');
var parseBody = require('../lib/parse-body');

describe('parseBody', function() {
  it('should return parsed search result', function(done) {
    fetchPage('word', function(error, body) {
      var result = parseBody(body);
      assert.equal(result.word, 'word');
      assert.equal(result.pronunciation, 'KK[wɝd] DJ[wə:d]');
      assert.equal(result.variants.join(','), 'words,worded,worded,wording');
      done();
    });
  });
});
