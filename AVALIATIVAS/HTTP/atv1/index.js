const http = require('http')
const porta = 3001

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    res.write('<h1>Olá mundo🦋✨</h1>')

    res.end()
})

server.listen(porta, () =>{
    console.log(`Vá até a porta ${porta} 𐀔`)
})