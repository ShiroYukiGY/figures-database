const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'account'
    },
    price:{
        type:String,
        default: '250000'
    },
    datePurchage:{
        type:Date,
        default: Date.now
    }
});
const PayMent = mongoose.model('payment',paymentSchema);
module.exports = PayMent;
