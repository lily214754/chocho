// setup Express
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(express.json())

const customerRouter = require('./routes/customerRouter')
const vendorRouter = require('./routes/vendorRouter')

//Check API is up
app.get('/', async (req, res) => {
    res.send("Success")
})

app.use('/customer', customerRouter)
app.use('/vendor', vendorRouter)

app.listen(port, () => {
    console.log(`server is listening on port`, port)
})
