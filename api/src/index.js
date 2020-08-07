console.clear()

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('./passport/setup')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const PORT = process.env.PORT || 80

var app = express()

// Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Config Sessions
app.use(session({
    secret: '681684fy6i8g4g6h84sa68sfd6a4_smk',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport INIT
app.use(passport.initialize())
app.use(passport.session())

// Routes declarations
var routeAPI = require('./routes/api')
var routeHome = require('./routes/home')

app.use(express.static(path.join(__dirname, '../public')))

// Routes USE
app.use('/api', routeAPI)
app.use(routeHome)

mongoose.connect("mongodb+srv://smk:321654987@cluster0.svqlm.gcp.mongodb.net/msgr?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, () => {
    console.log(`API Running...`)
})