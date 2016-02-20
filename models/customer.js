var mongoose = require("mongoose");
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var customerSchema = {
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
         locksmith: [{type: mongoSchema.Types.ObjectId, ref: 'Locksmith'}]
    }]
};
// create model if not exists.
module.exports = mongoose.model('customerSchema', customerSchema);