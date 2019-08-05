const express = require('express');
const app = express();
const trends = require("./src/api/trends-route")
const tweets = require("./src/api/tweets-route")
const cors = require("cors");
const users =require('./src/api/user-route');

//cors
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/trends",trends);
app.use("/tweets",tweets);
app.use('/users',users);


const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
//Middleware execue:
app.use(logger)

// pulls in express library
// const express = require('express');
var favicon = require('serve-favicon');
var path = require('path')

// instance of express made
app.use(cors()); // cross-origin resource sharing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(favicon(path.join(__dirname, 'favicon.ico')));



app.use("/api/auth", require("./src/api/auth-routes")); // imports user router
app.use("/api/user", require("./src/api/user-routes"))

app.get('/*', function(req, res){
    res.json({err: 'Unsupported GET request'})
})

app.use(function(req, res, next) {
    res.status(404);
    res.json({status:404,title:"Not Found",msg:"Route not found"});
    next();
});

const PORT = process.env.PORT || 5000;
 
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

