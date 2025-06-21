const http = require("http");

http.createServer((req, res)=>{
    res.write("<h1>Hi my love!</h1>");
    res.end();
}).listen(4500);
