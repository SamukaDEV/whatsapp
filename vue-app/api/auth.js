const express = require('express')
const UserModel = require('./models/User.model')
const router = express.Router()

// Utils
function catchError(err) {
    console.log(err)
}

// Check Authentication Middleware
function checkAuth(req, res, next) {
    if (req.session.authenticated) {
        next()
    } else {
        return res.json({ error: true, message: 'Not authenticated' })
    }
}

// Get API Auth Status
router.get('/', checkAuth, (req, res) => {
    res.json({})
})

// Sign In
router.post('/', (req, res) => {
    UserModel.findOne({ email: req.body.email, password: req.body.password }).then(data => {
        if (data) {
            req.session.user = data
            req.session.authenticated = true
            res.json({ auth: true })
        } else {
            res.json({ auth: false, message: 'User not found!' })
        }
    }).catch(err => catchError(err))
    // res.json({})
})

// Sign Out
router.get('/signout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }
        res.json({ auth: false, message: 'Logged out' })
    })
})

router.get('/status', (req, res) => {
    res.json({ sessionID: req.sessionID, session: req.session })
})

module.exports = { router, checkAuth }