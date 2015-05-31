# ydict-client

A command-line interface to Yahoo's online English-Chinese dictionary.

## Features

* Displaying definition in color
* Highlighting keyword and it's variants
* Auto-correcting spelling

## Screenshot

![ydict-client](screenshot.png)

## Installing

Installing with NPM:

```bash
$ npm install -g ydict-client
```

## Usage

Looking up a word or phrase:

```bash
$ ydict-client <word or phrase>
```

Examples:

```bash
$ ydict-client word
$ ydict-client look up
```

## API

To use it programmatically:

```javascript
var ydictClient = require('ydict-client');

ydictClient('word', function(error, definition) {
  if (error) throw new Error(error);
  console.log(JSON.stringify(definition));
});
```

## Tests

```bash
$ npm install
$ npm test
```

## License

MIT
