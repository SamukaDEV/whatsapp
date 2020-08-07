const express = require('express')
const userModel = require('../models/user.model')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res) => {
    userModel.find().then(list => {
        res.json({
            version: '0.1.0',
            users: list
        })
    })
})

router.post('/auth', (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
})

module.exports = router