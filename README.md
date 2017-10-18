# shorten-url

omit parts of a url for friendlier display

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

It's like [@sindresorhus](https://github.com/sindresorhus)'s [truncate-url](https://github.com/sindresorhus/truncate-url),
but without requiring the url and querystring modules in the browser. It's also
similar to [@williambelle](https://github.com/williambelle)'s [crop-url](https://github.com/williambelle/crop-url),
which is very lightweight, but it cuts off the `http://` or `https://` scheme
and I want to keep it.

This one cuts away pieces from the URL's path and query string until it fits:

```js
t.equal(shorten('https://www.vpro.nl/programmas/gliphoeve/documentaire-intro.html', 50),
  'https://www.vpro.nl/…/documentaire-intro.html')
t.equal(shorten('http://www.salvomag.com/unpragmatic-thoughts/?p=1738', 50),
  'http://www.salvomag.com/unpragmatic-thoughts/?…')
t.equal(shorten('https://www.reddit.com/?count=25&after=t3_76zjp1', 40),
  'https://www.reddit.com/?count=25&…')
t.equal(shorten('https://discordapp.com/channels/317475976369930241/317475976369930241', 25),
  'https://discordapp.com/…')
t.equal(shorten('http://example.com/ultra/cool/page/that-is-really-deeply/nested/', 30),
  'http://example.com/…/nested/')
```

[npm-image]: https://img.shields.io/npm/v/shorten-url.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/shorten-url
[travis-image]: https://img.shields.io/travis/goto-bus-stop/shorten-url.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/shorten-url
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install shorten-url
```

## Usage

```js
var shortenUrl = require('shorten-url')

shortenUrl('https://whatever.com/a/long/path/and?also=a&long=query&string', 30)
```

## API

### `shortenUrl(url, maxLength)`

`url` is the input URL. `maxLength` is the maximum length of the URL.

## License

[Apache-2.0](LICENSE.md)
