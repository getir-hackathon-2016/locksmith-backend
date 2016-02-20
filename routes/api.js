var express = require('express');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var router = express.Router();
var Customer = require("../models/customer");
var crypto = require('crypto');

/* GET authenticate token */
router.get('/authenticate/customer', function (req, res, next) {

    // find the customer
    Customer.findOne({
        email: req.query.email
    }, function (err, customer) {

        if (err) throw err;

        if (!customer) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else if (customer) {

            // check if password matches
            if (customer.password != crypto.createHash('sha1').update(req.query.password).digest("hex")) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(customer, config.secret, {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    error: false,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }
    });
});

module.exports = router;