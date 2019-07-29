// // strict - doesn't let you assign variables without values   
// "use strict";

// const mysql = require("mysql");

// const config = {
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   user: "b5d7fa9a863074",
//   password: "43b81c35",
//   database: "heroku_7a3ad4ad0a6eb7e"
// };

// var connection = mysql.createConnection(config);

// //- Establish a new connection
// connection.connect(function(err){
//     if(err) {
//         // mysqlErrorHandling(connection, err);
//         console.log("\n\t *** Cannot establish a connection with the database. ***");

//         connection = reconnect(connection);
//     }else {
//         console.log("\n\t *** New connection established with the database. ***")
//     }
// });

// //- Reconnection function
// function reconnect(connection){
//     console.log("\n New connection tentative...");

//     //- Destroy the current connection variable
//     if(connection) connection.destroy();

//     //- Create a new one
//     var connection = mysql.createConnection(config);

//     //- Try to reconnect
//     connection.connect(function(err){
//         if(err) {
//             //- Try to connect every 2 seconds.
//             setTimeout(reconnect, 2000);
//         }else {
//             console.log("\n\t *** New connection established with the database. ***")
//             return connection;
//         }
//     });
// }

// //- Error listener
// connection.on('error', function(err) {

//     //- The server close the connection.
//     if(err.code === "PROTOCOL_CONNECTION_LOST"){    
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connection = reconnect(connection);
//     }

//     //- Connection in closing
//     else if(err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connection = reconnect(connection);
//     }

//     //- Fatal error : connection variable must be recreated
//     else if(err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connection = reconnect(connection);
//     }

//     //- Error because a connection is already being established
//     else if(err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//     }

//     //- Anything else
//     else{
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connection = reconnect(connection);
//     }
// });

// module.exports = connection;

"use strict";

const mysql = require("mysql");

const db_config = {
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b5d7fa9a863074",
    password: "43b81c35",
    database: "heroku_7a3ad4ad0a6eb7e"
  };
  
  var connection;
  
  function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  
  handleDisconnect();

  module.exports = connection