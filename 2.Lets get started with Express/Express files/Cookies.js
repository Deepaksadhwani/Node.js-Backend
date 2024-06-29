/*  Cookies is data we save on browser, we do not need any additional package to save data but we need but to access or read we need cookie. */

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Cookies!");
});

app.get("/check", (req, res) => {
  console.log(req.cookies.name);
  res.send("checking ");
});

app.get("/banned", (req, res) => {
  res.cookie("name", "deepak");
  res.send("banned");
});

app.listen(3006);
