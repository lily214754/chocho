const mongoose = require("mongoose")

const snackSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    },
    photo: String,
    description: String,
    cost: {
        type: Number, 
        required: true, 
    }
})

const Snack = mongoose.model('Snack', snackSchema)
module.exports = Snack