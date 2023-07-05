const url = require('url')
const address = 'http://www.koikoi.com.br/coisas?coisonas=dinheiro&coisinhas=littemoney#amocoisas'
const parseUrl = new url.URL(address)
console.log(parseUrl)
console.log(parseUrl.protocol)
console.log(parseUrl.hostname)
console.log(parseUrl.pathname)
console.log(parseUrl.searchParams)