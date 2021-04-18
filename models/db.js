require('dotenv').config()    // for database login details
const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI ||'mongodb://localhost/SnacksInAVan'
// let connectionURL = 'mongodb://localhost/SnacksInAVan'
mongoose.connect( dbAddress, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: 'SnacksInAVan'})
const db = mongoose.connection

//Error Handling
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('connected to Mongo')
})
require("./")