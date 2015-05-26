var assert = require('chai').assert;
var ydictClient = require('..');

describe('fetchPage', function() {
  it('should fetch the search result page', function(done) {
    ydictClient._private.fetchPage('what if', function(error, body) {
      assert.match(body, /what\+if/);
      done();
    });
  });
});
