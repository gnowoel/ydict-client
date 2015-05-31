# ydict-client

A command-line interface to Yahoo's online English-Chinese dictionary.

## Features

* Displaying definitions in color
* Highlighting keyword and its variants in example sentences
* Auto-correcting spelling

## Screenshot

![ydict-client](screenshot.png)

## Installation

```bash
$ npm install -g ydict-client
```

## Usage

```bash
$ ydict-client <word or phrase>
```

## Examples

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
