var chalk = require('chalk');

function displayResult(keyword, result) {
  if (keyword !== result.word) {
    console.log(chalk.cyan.bold.underline(result.word));
  }
  console.log(result.pronunciation.replace(/\[([^\]]+)\]/g, ': [' + chalk.bold("$1") + ']'));
}

module.exports = displayResult;
