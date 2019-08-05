"use strict";

const mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit : 100,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b5d7fa9a863074",
  password: "43b81c35",
  database: "heroku_7a3ad4ad0a6eb7e"
});

module.exports = pool
  