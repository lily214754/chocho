const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        vendorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'},
        status: {
            type: String,
            enum: ['outstanding', 'fulfilled', 'completed', 'cancelled']
        },
        itemsOrdered: [{
            _id: false,
            snackId: {type: mongoose.Schema.Types.ObjectId, ref: 'Snack', required: true},
            quantity: {
                type: Number, 
                required: true, 
            }
        }],
        discountGiven: {
            type: String,
            enum: ['false', 'true']
        }
    },
    {timestamps: true}
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
