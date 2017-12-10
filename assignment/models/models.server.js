var mongoose = require('mongoose');
// var connectionString = 'mongodb://localhost/cs5610';

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds015335.mlab.com:15335/heroku_1snctwg2'; // use yours
}

var connectionString = 'mongodb://admin:admin@ds015335.mlab.com:15335/heroku_1snctwg2';

var db = mongoose.connect(connectionString, { userMongoClient: true });
module.exports = db;


