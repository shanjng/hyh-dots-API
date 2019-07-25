// strict - doesn't let you assign variables without values   
"use strict";

const mysql = require("mysql");

const config = {
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b5d7fa9a863074",
  password: "43b81c35",
  database: "heroku_7a3ad4ad0a6eb7e"
};

var connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) console.log(err);
  console.log("Database Connected: " + config.host + ":" + config.port);
});

module.exports = connection;