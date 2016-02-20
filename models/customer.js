// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('customer', new Schema({
    "name": String,
    "phone": String,
    "email": String,
    "password": String,
    locksmithRequests: [{
        status: Number,
        serviceType: Number,
        createDate: {type: Date},
        completeDate: {type: Date},
        coordinates: {type: [Number], index: '2dsphere'},
        price: Number,
        locksmith: [{type: Schema.Types.ObjectId, ref: 'Locksmith'}]
    }]
}));