const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const router = require('./routes/router')
const app = express()
dotenv.config()

const port = (process.env.PORT || 5000)

app.use(bodyParser.json())

app.use('/token',router)

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})