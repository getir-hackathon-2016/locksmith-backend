var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  response = {"error": false, "message": "No index"};
  res.json(response);
});

module.exports = router;
