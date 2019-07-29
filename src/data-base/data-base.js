"use strict";

const mysql = require("mysql");

// const db_config = {
//     host: "us-cdbr-iron-east-02.cleardb.net",
//     user: "b5d7fa9a863074",
//     password: "43b81c35",
//     database: "heroku_7a3ad4ad0a6eb7e"
//   };
  
//   var connection;
  
//   function handleDisconnect() {

//     connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                     // the old one cannot be reused.
  
//     connection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         connection.destroy()
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         connection.destroy()
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }
  
//   handleDisconnect();

//   module.exports = connection

var pool = mysql.createPool({
  connectionLimit : 100,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b5d7fa9a863074",
  password: "43b81c35",
  database: "heroku_7a3ad4ad0a6eb7e"
});

module.exports = pool
