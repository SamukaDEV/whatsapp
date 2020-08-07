const express = require('express')
const router = express.Router()
const CheckAuth = require('./auth').checkAuth

router.get('/profile', CheckAuth, (req, res) => {
    let user = req.session.user
    res.json({
        name: user.name, 
        email: user.email,
        verified: user.verified
    })
})

module.exports = { router }