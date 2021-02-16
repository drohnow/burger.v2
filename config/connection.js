//connection.js file provides access to the mySQL database
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: DATABASE_SVC,
  user: DATABASE_USER, //add your user//
  password: DATABASE_PASSWORD, //add you password//
  database: DATABASE_NAME
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});



// Export connection for use  //
module.exports = connection;


