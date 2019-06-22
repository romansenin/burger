let mysql = require("mysql");

// Create connection
mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Exports connection for our ORM to use
module.exports = connection;