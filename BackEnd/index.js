const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const DBase = require('./db.js')
const sqlite = require('sqlite-sync')
const bodyParser = require('body-parser')
const SocketIO = require('socket.io')
// const Sequelize = require('sequelize')
// const Op = Sequelize.Op


const app = express()
const PORT = process.env.PORT || 80

console.clear()

// Database connection
const db = new DBase(path.join(__dirname, 'database.sqlite'))
// const db = new Sequelize(null, null, null, {
//     dialect: 'sqlite',
//     storage: path.join(__dirname, 'database.sqlite'),
//     define: {
//         timestamps: true,
//         underscore: true
//     }
// })

// Express configs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Servers Definitions
const WebServer = app.listen(PORT, function () {
    console.log(`Server Listening on port ${PORT}...`)
})
const io = SocketIO(WebServer)

// Routes
app.get('/', function (req, res) {
    const index = path.join(__dirname, 'public/index.html')
    if (fs.existsSync(index)) {
        res.sendFile(index)
    } else {
        res.send('Waiting production env')
    }
})
app.get('/status', function (req, res) {
    sqlite.run('SELECT count(id_user) as len FROM user', function (rs) {
        res.render('index', { title: 'App', users_length: rs[0].len })
    })
})
app.get('/register', function (req, res) {
    res.render('register', { title: 'Register' })
})
app.post('/register', function (req, res) {
    // res.send(req.body)
    sqlite.insert('user', {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function (rs) {
        if (rs.error) {
            console.log(rs.error)
            res.redirect('/error')
        } else {
            res.locals.username
            res.redirect('/register-success')
        }
    })
})
app.get('/register-success', function (req, res) {
    res.render('register-success', { title: 'Success', username: req.body.username })
})
app.get('/error', function (req, res) {
    res.render('error', { title: 'Error' })
})

// WebSocket - SocketIO
io.on('connection', function (socket) {
    console.log(socket.id, 'connected')
    socket.on('disconnect', function () {
        console.log(socket.id, 'disconnected')
    })
    socket.on('auth', function (data) {
        sqlite.run('SELECT id_user, name, status, img_blob, phone FROM user WHERE email=? AND password=?', [data.email, data.password], function (rs) {
            if (rs.length <= 0) {
                socket.emit('auth', { status: 0, msg: 'User not found' })
            } else if (rs.length === 1) {
                socket.emit('auth', { status: 1, msg: 'User Authenticated', user: rs[0] })
                sendInfos(socket, rs[0].id_user)
            } else if (rs.length > 1) {
                socket.emit('auth', { status: 2, msg: 'Warning, your informations are duplicated, try to contact a support manager' })
            }
        })
    })
    socket.on('request-infos', function (id_user) {
        sendInfos(socket, id_user)
    })
})

function sendInfos(socket, id_user){
    sqlite.run('SELECT contacts.id_user, user.name, user.email, user.status FROM contacts INNER JOIN [user] ON contacts.id_contact = user.id_user WHERE contacts.id_user=?', [id_user], function (contacts) {
        socket.emit('contacts', contacts)
    })
    sqlite.run('SELECT contacts.id_user, user.name, user.email, user.status, user.img_blob FROM contacts INNER JOIN [user] ON contacts.id_contact = user.id_user WHERE contacts.id_user=?', [id_user], function (chats) {
        socket.emit('chats', chats)
    })
}