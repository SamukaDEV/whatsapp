const passport = require('passport')
const userModel = require('../models/user.model')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    userModel.findById(id, (err, user) => {
        done(err, user)
    })
})

// Local Strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Match User
        User.findOne({ email: email })
            .then(user => {
                // Create new User
                if (!user) {
                    const newUser = new User({ email, password });
                    newUser
                        .save()
                        .then(user => {
                            return done(null, user);
                        })
                        .catch(err => {
                            return done(null, false, { message: err });
                        });
                    // Return other user
                } else {
                    userModel.findOne({
                        email: email,
                        password: password
                    }).then(doc => {
                        if (doc !== null) {
                            done(null, user)
                        } else {
                            done(null, false, { message: 'Wrong!' })
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch(err => {
                return done(null, false, { message: err });
            });
    })
);

module.exports = passport;