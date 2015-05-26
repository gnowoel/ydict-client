function buildUrl(keyword, callback) {
  var url = require('url').format({
    protocol: 'https:',
    host: 'tw.dictionary.search.yahoo.com',
    pathname: '/search',
    query: { q: keyword }
  });

  callback(null, url);
}

buildUrl('word', function(err, url) {
  console.log(url);
});
