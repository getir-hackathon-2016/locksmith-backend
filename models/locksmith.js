var mongoose = require("mongoose");
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var locksmithSchema = {
    "email": String,
    "phone": String,
    "adress": String,
    "zipcode": String,
    "state": String,
    "country": String,
    "totalWorkCount": Number,
    "averagePoint": String,
    coordinates: {type: [Number], index: '2dsphere'},
    workDays: {
        monday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        },
        tuesday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        },
        wednesday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        },
        thursday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        },
        saturday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        },
        sunday: {
            "startHour": Number,
            "stopHour": Number,
            "price": Number
        }
    },
    works: {
        "username": String,
        "userPhone": String,
        "createDate": {type: Date},
        "completeDate": {type: Date},
        "status": Number,
        coordinates: {type: [Number], index: '2dsphere'},
        "serviceType": Number,
        "price": Number,
        "point": Number
    }
};
// create model if not exists.
module.exports = mongoose.model('locksmithSchema', locksmithSchema);