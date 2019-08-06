const express = require("express");
const router = express.Router();
const hashtags = require ("../service/getTrends-service");
const HASHTAG = new hashtags();
router.get("/:id", (req, res) => {
    HASHTAG
    .getTrends(req.params.id)  
    .then(result => { 
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/stats/:hashtag", (req, res) => {
  HASHTAG
  .getTrendStat(req.params.hashtag)
  .then(result => { 
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.get("/history/:hashtag", (req, res) => {
  HASHTAG
  .getTrendHistory(req.params.hashtag)
  .then(result => { 
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.get("/suggestions/:text", (req, res) => {
    HASHTAG
  .getSuggestions(req.params.text)
  .then(result => { 
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
module.exports = router;
