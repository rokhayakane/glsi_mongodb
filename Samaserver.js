const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h2 style='color:#ff0040'>BIENVENUE CHEZ KYA STORE</h2>");
    } else if (req.url === "/kya") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h2 style='color:#ff0040'>BIENVENUE CHEZ KYA STORE</h2>");
    } else {
        res.statusCode = 404;
        res.end("<h2 style='color:#ff0040'>La page est introuvable</h2>");
    }
});

server.listen(1337, () => {
    console.log("Server listening at : http://127.0.0.1:1337");
});
