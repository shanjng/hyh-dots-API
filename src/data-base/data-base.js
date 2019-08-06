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

// For all file imports of this file:
// 1. Get Connection: pool.getConnection((err, conn) => {}) 
// 2. Use Connection: conn.query()
// 3. Release Connection: conn.release()