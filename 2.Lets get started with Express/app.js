const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  console.log("In the another middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/> <input type='number' name='size'/><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in middleware!");
  res.send("<h1>Welcome to Express!</h1>");
});

app.listen(3000);
