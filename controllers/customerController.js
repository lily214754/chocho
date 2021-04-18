const {Order} = require('../models/orders.js')
const {Snack} = require('../models/snacks.js')
const {Vendor} = require('../models/vendors.js')
const {Customer} = require('../models/customers.js')

//const mongoose = require('mongoose')

//const Order = mongoose.model('Order')
//const Snack = mongoose.model('Snack')
//const Vendor = mongoose.model('Vendor')
//const Customer = mongoose.model('Customer')


//Get list of all snacks
const getAllSnacks = async (req, res) => {
    result = await Snack.find( {} )
    res.send(result)
}

//Get details of specific snack
const getSpecificSnackDetails = async (req, res) => {
    result = await Snack.find( {_id: req.params.snackId} )
    res.send(result)
}

//Create new order
const createOrder = async (req, res) => {
    //Create new order document in Order collection
    const newOrder = new Order({
        customerId: req.body.customerId,
        vendorId: req.body.vendorId,
        status: 'outstanding',
        itemsOrdered: req.body.itemsOrdered,
        discountGiven: 'false'
    })

    const result = await newOrder.save().catch((err)=> res.send(err))

    //Add reference to the new order in Vendor order array 
    console.log(typeof JSON.stringify(result._id))
    Vendor.updateOne({_id: req.body.vendorId},
        { $push: 
            {
                "orders": [result["_id"]]
            }
        }, function(err, result) {
            if (err) {
              res.send(err);
            }
        }
    )

    //Return original order creation response
    res.send(result)
}

module.exports = {
    getAllSnacks, getSpecificSnackDetails, createOrder
}