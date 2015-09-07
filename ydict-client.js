#!/usr/bin/env node

var lookupWord = require('./lib/lookup-word');
var formatResult = require('./lib/format-result');

function main() {
  var args = process.argv.splice(2);
  if (args.length === 0) {
    console.error('Usage: ydict-client <word or phrase>');
    process.exit(1);
  }
  var word = args.join(' ');

  lookup(word, function(error, definition) {
    if (error) throw new Error(error);
    if (definition.word) {
      var formatted = formatResult(word, definition);
      console.log(formatted);
    }
  });
}

function lookup(word, callback) {
  lookupWord(word, function(error, result) {
    if (error) return callback(error);
    if (!result.word && result.suggestion) {
      return lookupWord(result.suggestion, callback);
    }
    callback(null, result);
  });
}

if (require.main === module) {
  main();
}

module.exports = lookup;
