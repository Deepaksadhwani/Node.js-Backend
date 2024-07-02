const express = require("express");
const app = express();

//-------------npm i ejs-------------------------//
// set up => app.set("view engine", "ejs");
//create views folder
// create index.ejs

// in our app we are setting what will be seen as view engine it will be ejs we are setting it
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/profile', (req,res) => {
  res.render('profile')
})

app.listen(3334);
