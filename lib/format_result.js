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

    for (var i = 0; i < type.explanations.length; i++) {
      var exp = type.explanations[i];
      formatted.push('  ' + (i + 1) + '. ' + exp.explanation);

      for (var j = 0; j < exp.examples.length; j++) {
        var ex = exp.examples[j];
        formatted.push('     ' + chalk.cyan(ex.english));
        formatted.push('     ' + chalk.green(ex.chinese));
      }
    }
  });

  return formatted.join('\n');
}

module.exports = formatResult;
