
const express = require('express');
const path = require('path');
// allow us to create http servers
const http = require('http');
// parse incoming data from json
const bodyParser = require('body-parser');
// app: instance of the express library
const app = express();


const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(session({ secret: "asdfghjkl" }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// CORS  Cross Origin Request: allows browsers access servers to connect to other websites
// we need API supporting CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '9000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// var connectionString = 'mongodb://admin:admin@ds015335.mlab.com:15335/heroku_1snctwg2';
// mongoose.connect( connectionString);
var mongoose = require('mongoose');


require("./assignment/app") (app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// server.listen(port);
server.listen( port , () => console.log(`API running on localhost:${port}`));




