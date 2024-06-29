// cookie => cookie is used to save data on browser,
//express session => save data on server, limitation relying on server.
const express = require("express");
const app = express();
const expressSession = require("express-session");

app.use(
  expressSession({
    secret: "random stuff", // not recommend way just for understanding flow
    resave: false, // if there is no change in session do you still want to save it
    saveUninitialized: false, // save the unauthorized user or not, false mean not we ar not creating blank session for them
  })
);
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/create", (req, res) => {
  req.session.jin = true;
  res.send("Done");
});

app.get("/check", (req, res) => {
  console.log(req.session.jin);
});
app.listen(5000);
