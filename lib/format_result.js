var chalk = require('chalk');

function formatResult(keyword, result) {
  var formatted = [];

  if (keyword !== result.word) {
    formatted.push(chalk.cyan.bold.underline(result.word));
  }
  formatted.push(result.pronunciation.replace(/\[([^\]]+)\]/g, ': [' + chalk.bold("$1") + ']'));

  return formatted.join('\n');
}

module.exports = formatResult;
