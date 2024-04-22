const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('BIENVENUE CHEZ KYA STORE!\n');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});