var $ = require('cheerio');

function parseBody(body) {
  var el = $('#results', body);
  return {
    word: el.find('#term').first().text(),
    pronunciation: el.find('#pronunciation_pos').text(),
    types: parseTypes(el),
    suggestion: el.find('.VertQuerySuggestion').find('a').first().text(),
    variants: parseVariants(el)
  };
}

function parseTypes(el) {
  return el.find('.lst').first().find('.compArticleList').map(function() {
    return {
      description: $(this).prev().find('.title').text(),
      explanations: parseExplanations($(this))
    };
  }).get();
};

function parseExplanations(el) {
  return el.find('li').map(function() {
    return {
      explanation: $(this).find('h4').text().replace(/\d+\. /, ''),
      examples: parseExamples($(this))
    };
  }).get();
};

function parseExamples(el) {
  return el
    .find('.example_translation')
    .filter(function() {
      return $(this).text().length > 0;
    })
    .map(function() {
      var parent = $(this).parent();
      $(this).remove();
      return {
        "english": parent.text(),
        "chinese": $(this).text()
      }
    }).get();
};

function parseVariants(el) {
  return el.find('#variation').parent().parent().next().find('h4').map(function() {
    return $(this).text().replace(/\s/, '').split(':')[1].split(',');
  }).get();
}

module.exports = parseBody;
