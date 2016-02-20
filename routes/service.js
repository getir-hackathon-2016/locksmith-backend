var express = require('express');
var router = express.Router();
var Customer = require("../models/customer");
var Locksmith = require("../models/locksmith");

/* GET setup */
router.get('/create', function (req, res, next) {
    res.json({ error: false });
});

module.exports = router;