const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Node JS Application!");
});

const port = process.env.PORT || 1337;add
server.listen(port);

console.log("Server running at http://localhost:%d", port);