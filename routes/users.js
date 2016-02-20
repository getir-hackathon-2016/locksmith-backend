var express = require('express');
var router = express.Router();
var Customer = require("../models/customer");
var crypto = require('crypto');
var validator = require('validator');

/* GET users listing. */
router.get('/', function (req, res, next) {
    response = {"error": false, "message": "No index"};
    res.json(response);
});

/* POST register user. */
router.post('/register', function (req, res, next) {

    console.log(req.body);
    if (!validator.isEmail(req.body.email)) {
        res.json({error: true, message: 'Email is not valid'});
    } else if (validator.isNull(req.body.name)) {
        res.json({error: true, message: 'Name connot be null'});
    } else if (validator.isNull(req.body.phone)) {
        res.json({error: true, message: 'Phone connot be null'});
    } else if (validator.isNull(req.body.password)){
        res.json({error: true, message: 'Password connot be null'});
    }

    var user = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: crypto.createHash('sha1').update(req.body.password).digest("hex"),
    });

    user.save(function (err) {
        if (err) res.json({error: true});

        res.json({error: false});
    });
});

module.exports = router;
