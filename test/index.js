var test = require('tape')
var shorten = require('../')

test('shorten', function (t) {
  t.equal(shorten('https://www.vpro.nl/programmas/gliphoeve/documentaire-intro.html', 50), 'https://www.vpro.nl/…/documentaire-intro.html')
  t.equal(shorten('http://www.salvomag.com/unpragmatic-thoughts/?p=1738', 50), 'http://www.salvomag.com/unpragmatic-thoughts/?…')
  t.equal(shorten('https://www.reddit.com/?count=25&after=t3_76zjp1', 40), 'https://www.reddit.com/?count=25&…')
  t.equal(shorten('https://discordapp.com/channels/317475976369930241/317475976369930241', 25), 'https://discordapp.com/…')
  t.equal(shorten('http://example.com/ultra/cool/page/that-is-really-deeply/nested/', 30), 'http://example.com/…/nested/')
  t.end()
})
