const express = require('express')

const customerRouter = express.Router()

const customerController = require('../controllers/customerController.js')

//CUSTOMER ROUTES
//Get list of all snacks
customerRouter.get('/snacks', customerController.getAllSnacks)

//Get details of specific snack
customerRouter.get('/snacks/:snackId', customerController.getSpecificSnackDetails)

//Starts order
customerRouter.post('/order/create', customerController.createOrder)

module.exports = customerRouter