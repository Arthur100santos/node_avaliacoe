const url = require('url')
const address = 'http://www.earth.com.br/lifes?racional=human&masterracional=butterfly'
const parseUrl = new url.URL(address)
console.log(parseUrl)
console.log(parseUrl.protocol)
console.log(parseUrl.hostname)
console.log(parseUrl.pathname)
console.log(parseUrl.searchParams)