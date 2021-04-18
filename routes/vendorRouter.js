const express = require('express')

const vendorRouter = express.Router()

const vendorController = require('../controllers/vendorController.js')

//VENDOR ROUTES
//Update status of vendor
vendorRouter.post('/status/set', vendorController.updateVendorStatus)

//Get all outstanding orders for vendor
vendorRouter.get('/:vendorId/orders/:status', vendorController.getOustandingOrders)

//Update order status from status in request
vendorRouter.post('/order/update', vendorController.updateOrderStatus)

module.exports = vendorRouter