var cheerio = require('cheerio');

function parseBody(body) {
  var $ = cheerio.load(body);
  var root = $('#results');
  return {
    'word': root.find('#term').first().text(),
    "pronunciation": root.find("#pronunciation_pos").text()
  };
}

module.exports = parseBody;
