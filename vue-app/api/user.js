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

router.get('/chats', CheckAuth, (req, res) => {
    // eslint-disable-next-line no-unused-vars
    let FakeChats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    res.json([1, 2, 3])
})

module.exports = { router }