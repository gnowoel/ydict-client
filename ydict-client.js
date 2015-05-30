#!/usr/bin/env node

var lookupWord = require('./lib/lookup_word');
var formatResult = require('./lib/format_result');

function main() {
  var args = process.argv.splice(2);
  if (args.length === 0) {
    console.error('Usage: ydict-client <word or phrase>');
    process.exit(1);
  }
  var word = args.join(' ');

  lookupWord(word, function callback(error, result) {
    if (error) throw new Error(error);
    if (result.word) {
      var formatted = formatResult(word, result);
      console.log(formatted);
    } else if (result.suggestion) {
      lookupWord(result.suggestion, callback);
    }
  });
}

if (require.main === module) {
  main();
}

module.exports = lookupWord;
