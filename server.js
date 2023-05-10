const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("reuest event"); 
    res.end("Muhammad Tahir");
});

server.listen(5000, ()=>{
    console.log('the server listening on port: 5000');
});