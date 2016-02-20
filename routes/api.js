var express = require('express');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config');
var router = express.Router();
var Customer = require("../models/customer");

/* GET authenticate token */
router.get('/authenticate/customer', function (req, res, next) {

    // find the customer
    Customer.findOne({
        name: req.query.name
    }, function (err, customer) {

        if (err) throw err;

        if (!customer) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else if (customer) {

            // check if password matches
            if (customer.password != req.query.password) {
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