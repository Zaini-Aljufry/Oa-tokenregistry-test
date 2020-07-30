const express = require('express')
const router = express.Router()
const {oaTR} = require('../controller/oa')

router.get("/", (req,res,next)=>{
    return res.json({message: "it works"})
})

router.post("/create",oaTR)


module.exports = router