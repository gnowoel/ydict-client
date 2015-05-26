var fetchPage = require('./fetch_page');
var parseBody = require('./parse_body');
var formatResult = require('./format_result');

function lookup(keyword, callback) {
  fetchPage(keyword, function(error, body) {
    if (error) return callback(error);
    var result = parseBody(body);
    var formatted = formatResult(keyword, result);
    callback(null, formatted);
  });
}

module.exports = lookup;
