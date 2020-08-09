const express = require('express')
const router = express.Router()
const ContactModel = require('./models/Contact.model')

router.get('/', (req, res)=>{
    ContactModel.find({})
    res.json([])
})

module.exports = { router }