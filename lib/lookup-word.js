var fetchPage = require('./fetch-page');
var parseBody = require('./parse-body');

function lookupWord(word, callback) {
  fetchPage(word, function(error, body) {
    if (error) return callback(error);
    var result = parseBody(body);
    callback(null, result);
  });
}

module.exports = lookupWord;
