var assert = require('chai').assert;
var ydictClient = require('..');
var fetchPage = require('../lib/fetch_page');
var parseBody = require('../lib/parse_body');
var formatResult = require('../lib/format_result');

describe('formatResult', function() {
  it('should format parsed result', function(done) {
    var keyword = 'word'
    fetchPage(keyword, function(error, body) {
      var result = parseBody(body);
      var formatted = formatResult(keyword, result);
      assert.equal(formatted, 'KK: [\u001b[1mwɝd\u001b[22m] DJ: [\u001b[1mwə:d\u001b[22m]');
      done();
    });
  });
});
