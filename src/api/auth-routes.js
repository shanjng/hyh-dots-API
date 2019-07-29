const express = require("express");
const router = express.Router();

const AuthService = require("../services/auth-services")

router.get('/', (req,res) => {
    res.send("made it to auth-routes!")
})

router.post('/login', (req, res) => {
    console.log("got into auth login")
    AuthService.prototype.login(req.body)
    .then(response =>
        res.send(response)
    )
    .catch(err => {
        res.status(400).send(err)
    })
})

module.exports = router;