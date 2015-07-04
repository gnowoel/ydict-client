# ydict-client [![Build Status](https://travis-ci.org/gnowoel/ydict-client.svg?branch=master)](https://travis-ci.org/gnowoel/ydict-client)

A command-line interface to Yahoo's online English-Chinese dictionary.

## Features

* Displaying definitions in color
* Highlighting keywords and their variants
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

## Credits

I'd been using [ydict](https://github.com/chenpc/ydict) from [Homebrew](https://github.com/Homebrew/homebrew/blob/master/Library/Formula/ydict.rb) until it ceased to work. I decided to maintain my own version to avoid this situation. Inspiration and code come from [chunghe/ydict](https://github.com/chunghe/ydict) and [sayuan/ydict.js](https://github.com/sayuan/ydict.js). Thank you all!

## License

MIT
