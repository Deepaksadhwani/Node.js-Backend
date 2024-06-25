const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html><body>");
      if (!err && data) {
        res.write(`<h1>Last message: ${data}</h1>`);
      }
      res.write("<form action='/message' method='POST'><input type='text' name='message' /><button>Click here</button></form>");
      res.write("</body></html>");
      return res.end();
    });
    return;
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          return res.end("Internal Server Error");
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
    return;
  }

  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  if (url === "/home") {
    res.end("<html><body><h1>Welcome to home page!</h1></body></html>");
  } else if (url === "/about") {
    res.end("<html><body><h1>Welcome to About us page!</h1></body></html>");
  } else if (url === "/node") {
    res.end("<html><body><h1>Welcome to Node js Project</h1></body></html>");
  } else {
    res.statusCode = 404;
    res.end("<html><body><h1>404 Not Found</h1></body></html>");
  }
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});