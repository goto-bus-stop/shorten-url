/**
 * Omit parts of a url for friendlier display.
 *
 * Cut away pieces of the URL's path and query string until it fits.
 *
 * @param url The input URL.
 * @param maxLength The maximum length of the URL.
 *
 * @example
 * shortenUrl('https://whatever.com/a/long/path/and?also=a&long=query&string', 30)
 */
function shortenUrl(url: string, maxLength: number): string

export = shortenUrl
