const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Test 1");
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("Test 2");
    response.end("Hello World Test!");  
    console.log("Test 3");  
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);