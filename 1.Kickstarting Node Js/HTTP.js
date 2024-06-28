const http = require("http");

const server1 = http.createServer((req, res) => {
  // any data which we will be coming or getting from browser / frontend it will be highlight by 'req'(request)
  // if we are sending data  it will be done with 'res' (response) from server side
  console.log(req);
  res.end("<h1>Welcome to Node js</h1>");
});
server1.listen(4000);


/*---------------------------------nodemon-----------------------------*/
// we use nodemon for refreshing the server every time changes is occurred
// npm i nodemon --save-dev there is no use of production dependencies alway use dev Dependencies 


/*---------------------------------Basic of Routes-----------------------------*/
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.end("<h1>Welcome to node.js</h1>");
  } else if (url === "/profile") {
    res.end("<h1>Deepak Sadhwani</h1>");
  } else {
    res.end("<h1>Page is not found.</h1>");
  }
});

server.listen(3000);


/*---------------------------------HTTP Methods-----------------------------*/

//  GET (getting or fetching data) 
//  POST (creation of data)  
//  PATCH (Changing specified   existing data or Updating selected data) 
//  PUT (updating whole data rewrite  whole data) 
//  DElETE (deleting the data)


/*---------------------------------HTTP status codes -----------------------------*/

// 100 -  Other Side of Server has accepted the request, the request we have sent it is reached to other side of server it 100 gives this indication 
// 101 after reaching Server it redirected into different protocol during that we get 101

// 200 - successfully request goes and response is also  arrived, everything is okay and perfect.
// 201-  it sends a request for creation, if our request create something in database we get this response 201 (created response)
// 202-  asynchronous, request is accept on server but that request work will process and take some time to response so during that time we get 202.
// 203- your request is sent to other server with third party (server is redirecting your request to other server) it is also used distributed system in that condition we get 203

// 301- Resources or Data is moved somewhere else, Ex. you send request you do not get data because data or resources does not exist there we have to find somewhere else.
// 307- Resources or Data is temporary redirected to somewhere else, temporary moved.
// 308- Resources or Data is permanently redirected or moved somewhere else.

// 400- (Bad request) server is not able to process it could be many reason one could be missing parameter server is not able to process it 
// 401- (unauthorized) response status, Ex. trying to delete and create something which you do not have permission of, after being  authorized we get permission else 401
// 403- (forbidden) response status, Ex. we can not access other person information.
//404- (not Found) there is not doing available on this url. 

//500- (internal server error) server is unable to proceed for some reason.
//502- (bad Gateway) ex. suppose clint send a request to server and there 2 sever there one server received clint request and it give that request to second server and that second server also give it response but in case second server is dead or something happened to it then it gives bad 502 status code to client  
//503- (server is unavailable) due to heavy load unable to response or process  






 
