var assert = require('chai').assert;
var ydictClient = require('..');

describe('fetchPage', function() {
  it('should fetch the search result', function(done) {
    ydictClient.fetchPage('what if', function(error, body) {
      assert.match(body, /what\+if/);
      done();
    });
  });
});
