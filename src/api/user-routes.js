const express = require("express");
const router = express.Router();
const userService = require("../services/user-service")

router.get('/', (req,res) => {
    res.send("made it to auth-routes!")
})

router.get('/get', (req,res) => {
    userService.prototype.getAll()
    .then(response => res.send(response))
    .catch(err => res.status(400).send(err))
})

module.exports = router;