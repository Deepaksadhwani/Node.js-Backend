/*------------ Cors (Cross Origin Resource Sharing-------------------------*/
// there is security feature with that browser  do not allow us access data of web domain, browser prevent it , we want browser to allow it for access data so with the help of server we can  enable CORS.

// npm i cors

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("welcome to Cors");
});

app.listen(3005);
