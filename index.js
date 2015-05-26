var url = require('url');

exports.buildUrl = function (keyword) {
  return url.format({
    protocol: 'https:',
    host: 'tw.dictionary.search.yahoo.com',
    pathname: '/search',
    query: { p: keyword }
  });
}
