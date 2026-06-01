const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("request made");
    // Request object attributes 
    console.log(req.url);
    console.log(req.method)

    // Response object attributes and methods
    res.setHeader('content-type',"plain/text");
    res.write("Hello World");
    res.end();
    
})

server.listen(3000,(req,res)=>{
    console.log("Server Up")
})