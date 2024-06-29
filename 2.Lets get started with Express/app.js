const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// order matters always keep on top of other routes

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use("*", (req, res) => {
  res.status(404).send("<h1>Page is not Found!</h1>");
});

app.listen(3000);
