var assert = require('chai').assert;
var fetchPage = require('../lib/fetch_page');

describe('buildUrl', function() {
  it('should build the search URL with given query string', function() {
    var url = fetchPage._private.buildUrl('word');
    assert.equal(url, 'https://tw.dictionary.search.yahoo.com/search?p=word');
  });

  it('should encode query string in the search URL', function() {
    var url = fetchPage._private.buildUrl('what if');
    assert.equal(url, 'https://tw.dictionary.search.yahoo.com/search?p=what%20if');
  });
});

describe('fetchPage', function() {
  it('should fetch the search result page', function(done) {
    fetchPage('what if', function(error, body) {
      assert.match(body, /what\+if/);
      done();
    });
  });
});
