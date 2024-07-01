const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/", (req, res) => {
  const username = req.body.username;
  console.log(username);
  req.session.username = username;
  req.session.messages = [];
  res.redirect("/dashboard");
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.send(
    '<form action="/" method="POST"><input type="text" name="username" /><button type="submit">Login</button></form>'
  );
});

app.get("/dashboard", (req, res) => {
  const username = req.session.username;
  if (!username) {
    return res.redirect("/login");
  }
  const messages = req.session.messages || [];
  res.send(`
    <p>Welcome, ${username}!</p>
    <form action="/dashboard" method="POST">
      <input type="text" name="message" />
      <button type="submit">Type message</button>
    </form>
    <div>
      <h2>Messages:</h2>
      <ul>
        ${messages.map((msg) => `<li>${username}: ${msg}</li>`).join("")}
      </ul>
    </div>
  `);
});

app.post("/dashboard", (req, res) => {
  const message = req.body.message;
  if (message) {
    req.session.messages.push(message);
  }
  res.redirect("/dashboard");
});

app.listen(3000);
