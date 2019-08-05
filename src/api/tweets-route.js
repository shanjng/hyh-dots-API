const express = require("express");
const router = express.Router();
const tweets = require ("../service/getTweets-service");
const TWEETS = new tweets();
router.get("/popular/hashtag/:hashtag", (req, res) => {
    TWEETS
    .getPopByHash(req.params.hashtag)
    .then(result => {
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);   
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/recent/hashtag/:hashtag", (req, res) => {
    TWEETS
    .getRecByHash(req.params.hashtag)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/recent/language/:lang", (req, res) => {
    TWEETS
    .getRecByLang(req.params.lang)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/popular/language/:lang", (req, res) => {
    TWEETS
    .getPopByLang(req.params.lang)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/recent/location/:city", (req, res) => {
    TWEETS
    .getRecByLoc(req.params.city)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/popular/location/:city", (req, res) => {
    
    TWEETS
    .getPopByLoc(req.params.city)
    .then(result => { 
      
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
      
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/viewAllCities", (req, res) => {
    TWEETS
    .getAllCities()
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/popular/username/:user", (req, res) => {
    TWEETS
    .getPopByUser(req.params.user)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/recent/username/:user", (req, res) => {
    TWEETS
    .getRecByUser(req.params.user)
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
module.exports = router;
