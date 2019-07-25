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

var connection;
function handleDisconnect() {
    connection = mysql.createConnection(dbConfig);  // Recreate the connection, since the old one cannot be reused.
    connection.connect( function onConnect(err) {   // The server is either down
        if (err) {                     // or restarting (takes while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 10000);    // We introduce a delay before attempting to reconnect,
        }                                           // to avoid a hot loop, and to allow our node script to
    });                                             // process asynchronous requests in the meantime.
                                                    // If you're also serving http, display a 503 error.
    connection.on('error', function onError(err) {
        console.log('db error', err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {   // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                        // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}
handleDisconnect();

// connection.connect(function(err) {
//   if (err) console.log(err);
//   console.log("Database Connected: " + config.host + ":" + config.port);
// });

module.exports = connection;