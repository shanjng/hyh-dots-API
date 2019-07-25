// pulls in express library
const express = require('express');
var favicon = require('serve-favicon');
var path = require('path')

// instance of express made
const app = express();
var cors = require('cors');

app.use(cors()); // cross-origin resource sharing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use("/api/auth", require("./src/api/auth-routes")); // imports user router
app.use("/api/user", require("./src/api/user-routes"))

app.get('/*', function(req, res){
    res.json({err: 'Unsupported GET request'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

