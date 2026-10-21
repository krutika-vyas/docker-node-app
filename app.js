const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello from docker and node.js! ");
});

server.listen(3000, () => {
    console.log("server is running on 3000 port");
});

console.log("hello from docker and node.js");
