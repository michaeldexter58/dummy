const http = require('http');

const server = http.createServer((req,res) =>{

    if(req.url==='/'){
        res.end('Welcome to Our home page');
    }
    if(req.url =='/about'){
        res.end('This is our history ')
    }
    res.end('<h1>Ooops!!</h1>')
})

server.listen(5000)