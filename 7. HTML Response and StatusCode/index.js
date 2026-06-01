const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url);
  let path = "./7. HTML Response and StatusCode/";

  if (req.url == "/" || req.url == "/home") {
    path += "index.html";
  } else if (req.url == "/about") {
    path += "about.html";
  } else {
    res.statusCode = 404;
    path += "error.html";
  }

  fs.readFile(path, (err, data) => {
    res.end(data);
  });
});

server.listen(3000, (req, res) => {
  console.log("Server Up");
});
