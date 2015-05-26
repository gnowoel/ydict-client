var url = require('url');
var request = require('request');

function buildUrl(keyword) {
  return url.format({
    protocol: 'https:',
    host: 'tw.dictionary.search.yahoo.com',
    pathname: '/search',
    query: { p: keyword }
  });
}

function fetchPage(keyword, callback) {
  var options = {
    url: buildUrl(keyword),
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      callback(error);
    } else if (response.statusCode != 200) {
      callback(new Error('Error: ' + response.statusCode));
    } else {
      callback(null, body);
    }
  });
}

if (process.env.NODE_ENV === 'test') {
  module.exports._private = {
    buildUrl: buildUrl,
    fetchPage: fetchPage
  }
}
