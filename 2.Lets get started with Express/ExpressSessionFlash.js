const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "anything",
  })
);

app.use(flash());

app.get("/", (req, res, next) => {
  req.flash("error", "Invalid Credentials");
  res.redirect("/error");
});

app.get("/error", (req, res, next) => {
  const message = req.flash("error");
  res.send(message);
});

app.listen(7001);
