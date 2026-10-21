const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end('hello from my dockerized node.js backend!')
})
server.listen(3000, "0.0.0.0", () => {
    console.log("server is running on port 3000")
});



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// mongoose.connect('mongodb://localhost:27017/dockercompose')
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log("mongo error ", err));

// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send("hello from node + mongodb");
// });

// app.listen(PORT,'0.0.0.0', () => {
//     console.log(`server is running on http://localhost:${PORT}`);
// });
