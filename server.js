// Get the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

// const serverSide = require("./assignment/test-mongodb/app");
// serverSide(app);

const assignment = require("./assignment/app.js")(app);
// require("./wax-server/app")(app);


server.listen(port);


// app.get('*', function(req,res) {
//    res.sendFile(path,join(__dirname, 'dist/index.html'))});


// For Build: Catch all other routes and return the index file -- BUILDING
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });


// server.listen( port , () => console.log('Running'));
// var hello = require("./hello");
// hello(app);



// app.listen(port, ipaddress);
// var assignment = require("./assignment/app")(app);
// require("./assignment/app")(app);


// app.get("/",function() {
//   console.log("Hello form Root context Handler");
// })


