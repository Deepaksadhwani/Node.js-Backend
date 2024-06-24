// importing data
const http = require("http");


const server = http.createServer((req, res) => {
  const url = req.url;

  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  if (url == "/home") {
    res.write("<html><body> <h1>Welcome to home page!</h1></body></html>");
  } else if (url == "/about") {
    res.write("<htm><body><h1>Welcome to About us page!</h1></body></htm>");
  } else if (url == "/node") {
    res.write("<html><body><h1>Welcome to Node js Project</h1></body></html>");
  } else {
    res.write("<html><body><h1>Hello world</h1></body></html>");
  }
  res.end();
});

server.listen(4000);
