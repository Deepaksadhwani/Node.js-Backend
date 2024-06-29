const express = require("express"); //accessing express from package
const app = express(); // unpacking express (whatever was in express ) is  stored in app


// any function in which we has access or req, res and next then that function is called middleware.
// if we do not use app.use() express js can not tell it is normal function or middleware function.
app.use((req,res,next) => {
  console.log('hey hello')
  next() // when your requst is stuck in middleware and it is not going ahead at that we use next()
})

app.get("/", (req, res) => {
  res.send("Express Domination!");
}); // app.get() is used when you want to get something from front-end / client (sever) side

app.get("/about", (req, res) => {
  res.send("Welcome to About us Page!");
}); // app.get() is used when you want to get something from front-end / client (sever) side

app.get("*", (req,res) => {
  res.send("URL path does not Exist.") 
}) // (always this in end app.get() hierarchy  else it will overwrite path above path with this ) any page which does not exist path user enter you can show screen like  this. universal route.

app.listen(4000);

/*-----------------------------------------middleware------------------------------------------*/
//whenever we sent a request to browser, it goes to it's route and we want to before it goes to it's route we want to check or add something before it reaches on route the tools which allows to do this is called middleware.

