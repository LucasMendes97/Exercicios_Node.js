var http = require('http');
var server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World!</h1>");
    response.end();
});
server.listen(3000, ()=>{console.log('Servidor Hello world rodando')});