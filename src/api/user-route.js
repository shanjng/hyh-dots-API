const express = require("express");
const router = express.Router();
const users = require('../models/getUsers');
const userService = require('../service/getUsers-service');

//gets a list of all the users, using the filters provided to the browse page
// the default topic is fashion, the default follower count range is 0-1,000,000
//input has to be a JSON: example [{topic: "fashon"}]
router.post("/users",(req,res)=>{
    console.log("body",req.body);
    userService.prototype.getFilteredUsers(req.body).then((respond)=>{
        console.log("response",respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})

router.post("/view",(req,res)=>{
    users.prototype.getUserByID(req.body.userId).then((respond)=>{
        console.log("response",respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})
router.post("/location",(req,res)=>{
    userService.prototype.getUserByLocation(req.body).then((respond)=>{
        console.log(respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})

module.exports=router;