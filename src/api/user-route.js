const express = require("express");
const router = express.Router();
const users = require('../models/getUsers');
const userService = require('../service/getUsers-service');


router.post("/users",(req,res)=>{
    console.log(req.body.topic);
    userService.prototype.getVerifiedUsers(req.body).then((respond)=>{
        console.log(respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})

router.post("/view",(req,res)=>{
    console.log(req.body.topic);
    users.prototype.getUserByID(req.body.userId).then((respond)=>{
        console.log(respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})

module.exports=router;