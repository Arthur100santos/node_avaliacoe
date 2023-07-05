const http = require('http')
const porta = 3001

const server =  http.createServer((req, res)=>{
    if(req.url ==='/home'){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
        res.write('<h1>Home page</h1>')
        res.end()
    }else if(req.url ==='/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }else(req.url === '/');{
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
        res.write('<h1> "/home" = pagina home ; "/about" = about home</h1>')
    }
        
})

server.listen(porta, ()=>{
    console.log(`Rodando na porta ${porta} tanta o "/home" e "/about"`)
})