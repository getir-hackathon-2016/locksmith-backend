var express = require('express');
var router = express.Router();
var Customer = require("../models/customer");

/* GET setup */
router.get('/', function(req, res, next) {

    // create a sample user
    var user = new Customer({
        name: 'Enes Dayanç',
        password: 'password'
    });

    // save the sample user
    user.save(function(err) {
        if (err) res.json({ error: true });;

        console.log('User saved successfully');
        res.json({ error: false });
    });
});

module.exports = router;