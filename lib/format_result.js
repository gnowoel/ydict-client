var chalk = require('chalk');

function formatResult(word, result) {
  var formatted = [];

  if (word !== result.word) {
    formatted.push(chalk.cyan.bold.underline(result.word));
  }

  if (result.pronunciation) {
    formatted.push(result.pronunciation.replace(/\[([^\]]+)\]/g, ': [' + chalk.bold("$1") + ']'));
  }

  if (result.variants.length > 0) {
    formatted.push(result.variants.join(', '));
  }

  result.types.forEach(function(type) {
    formatted.push(chalk.red.bold(type.description));

    type.explanations.forEach(function(explanation, i) {
      formatted.push('  ' + (i + 1) + '. ' + explanation.explanation);

      explanation.examples.forEach(function(example) {
        var variants = [word].concat(result.variants);
        formatted.push('     ' + chalk.cyan(highlight(example.english, variants)));
        formatted.push('     ' + chalk.green(example.chinese));
      });
    });
  });

  return formatted.join('\n');
}

function highlight(sentence, words) {
  var regexp = new RegExp('(\\b' + words.join('\\b|\\b') + '\\b)');

  return sentence.replace(regexp, chalk.bold('$1'));
}

module.exports = formatResult;
