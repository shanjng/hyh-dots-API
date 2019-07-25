// pulls in express library
const express = require('express');
const favicon = require('express-favicon');

// instance of express made
const app = express();
var cors = require('cors');

app.use(favicon(__dirname + '/dist/hyhapi/favicon.ico'));

app.use(express.static(__dirname + '/dist'));

// app.get('/', function(req,res) { 
//     res.sendFile(path.join(__dirname + '/dist/hyh/'));
// });

app.use(cors()); // cross-origin resource sharing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/auth", require("./src/api/auth-routes")); // imports user router
app.use("/api/user", require("./src/api/user-routes"))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

