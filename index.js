'use strict'

module.exports = function shortenUrl (url, maxLength) {
  if (typeof url !== 'string') throw new TypeError('shorten-url: url must be a string')
  if (typeof maxLength !== 'number') throw new TypeError('shorten-url: maxLength must be a number')

  if (url.length < maxLength) return url

  var scheme = /\w+:\/\//.exec(url)
  if (scheme) {
    scheme = scheme[0]
    url = url.slice(scheme.length)
  }

  var i = url.indexOf('/')
  var host
  if (i === -1) {
    host = url
    url = ''
  } else {
    host = url.slice(0, i)
    url = url.slice(i + 1)
  }

  var path
  i = url.indexOf('?')
  if (i === -1) {
    path = url
    url = ''
  } else {
    path = url.slice(0, i)
    url = url.slice(i + 1)
  }

  var query = url

  var parts = path.split('/')
  var currentLength = scheme.length + host.length + path.length
  var spliceIndex = -1
  while (parts.length && currentLength > maxLength - 3) {
    // Bias towards removing the start of a path vs the end
    spliceIndex = Math.floor(parts.length / 2 - 1)
    if (spliceIndex < 0) spliceIndex = 0

    var part = parts.splice(spliceIndex, 1)
    currentLength -= part[0].length + 1 /* the / */
  }

  if (spliceIndex !== -1) {
    parts.splice(spliceIndex, 0, '…')
  }

  var newUrl = scheme + host + '/' + parts.join('/')
  if (query) {
    parts = query.split('&')
    for (i = 0; i < parts.length; i++) {
      if (currentLength + parts[i].length >= maxLength - 3) {
        break
      }
      currentLength += parts[i].length
    }
    newUrl += '?' + parts.slice(0, i).join('&')
    if (i < parts.length) {
      if (i > 0) newUrl += '&'
      newUrl += '…'
    }
  }

  // If it's still too long, just chop some stuff off without caring about contents.
  if (newUrl.length > maxLength) {
    newUrl = newUrl.slice(0, maxLength - 1) + '…'
  }

  return newUrl
}
