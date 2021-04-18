const {Order} = require('../models/orders.js')
const {Snack} = require('../models/snacks.js')
const {Vendor} = require('../models/vendors.js')
const {Customer} = require('../models/customers.js')

//const mongoose = require('mongoose')

//const Order = mongoose.model('Order')
//const Snack = mongoose.model('Snack')
//const Vendor = mongoose.model('Vendor')
//const Customer = mongoose.model('Customer')

//Update status of vendor
const updateVendorStatus = async (req, res) => {
    try{
        await Vendor.findByIdAndUpdate( req.body.vendorId, {status: req.body.status, textAddress: req.body.textAddress, location: {type: "Point", coordinates: req.body.location.coordinates}}, {new: true, select: "-orders"}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
        })
    } catch (e){
        res.send(e)
    }
}

//Get all outstanding orders for vendor
const getOustandingOrders = async (req, res) => {
    const result = await Vendor.find( {_id: req.params.vendorId} , 'orders').populate({path: "orders", match: {status: req.params.status}, select: "-vendorId", populate: {path: "customerId itemsOrdered.snackId", select: "firstName name cost"}})
    //Remove null values
    var jsonResult = JSON.parse(JSON.stringify(result[0]["orders"]))
    var filteredResult = JSON.parse('[]')
    for(var i = 0; i < jsonResult.length; i++) {
        if (jsonResult[i] != null){
            filteredResult.push(jsonResult[i])
        }
    }
    res.send(filteredResult)
}

//Update order status from status in request
const updateOrderStatus = async (req, res) => {
    try{
        await Order.findByIdAndUpdate( req.body.orderId, {status: req.body.status}, {new: true}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
        })
    } catch (e){
        res.send(e)
    }
    // res.json({ vendorId: req.params.vendorId, order: req.params.orderId, orderStatus: req.query.orderStatus})
}

module.exports = {
    updateVendorStatus, getOustandingOrders, updateOrderStatus
}