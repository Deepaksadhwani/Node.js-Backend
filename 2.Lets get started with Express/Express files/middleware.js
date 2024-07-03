const express = require("express");
const app = express();
const port = 3000;

let num = 0;
// Logging Middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Time: ${new Date()}`);
  num++;
  next(); // Pass control to the next middleware or route handler
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send(`Hello, World! and count is ${num}`);
});

app.get("/amazon", (req, res) => {
  res.send(`Hello, amazon! and count is ${num}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
