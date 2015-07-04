var assert = require('chai').assert;
var ydictClient = require('../ydict-client');

describe('ydict-client', function() {
  it('should follow suggestion', function(done) {
    var word = 'dictionari';
    var corrected = 'dictionary';
    ydictClient(word, function(error, definition) {
      assert.equal(definition.word, corrected);
      done();
    });
  });
});
