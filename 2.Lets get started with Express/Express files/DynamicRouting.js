const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

//statics routes
app.get("/harsh", (req, res) => {
  res.send("user name is harsh");
});

// dynamic routes
app.get("/:username", (req, res) => {
  const username = req.params.username;
  res.send(`user name is ${username}`);
});

app.listen(3003);
