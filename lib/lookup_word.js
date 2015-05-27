var fetchPage = require('./fetch_page');
var parseBody = require('./parse_body');

function lookupWord(word, callback) {
  fetchPage(word, function(error, body) {
    if (error) return callback(error);
    var result = parseBody(body);
    callback(null, result);
  });
}

module.exports = lookupWord;
