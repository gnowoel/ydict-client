var assert = require('assert');
var ydictClient = require('..');

describe('buildUrl', function() {
  it('should build the search URL with given query string', function() {
    var url = ydictClient.buildUrl('word');
    assert.equal(url, 'https://tw.dictionary.search.yahoo.com/search?p=word');
  });

  it('should encode query string in the search URL', function() {
    var url = ydictClient.buildUrl('what if');
    assert.equal(url, 'https://tw.dictionary.search.yahoo.com/search?p=what%20if');
  });
});
