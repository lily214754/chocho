const mongoose = require("mongoose")

const vendorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    },
    status: {
        type: String,
        enum: ['closed', 'ready-for-orders']
    },
    textAddress: String,
    location: {
        type: {
            type: String, 
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
})

const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports =  Vendor
