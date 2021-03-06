console.clear()
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('./db')
const socketIO = require("socket.io")
const path = require('path')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || 80

const API_ENABLED = true

const io = socketIO(http)

const routeAuth = require('./auth').router
const routeContacts = require('./contacts').router
const routeUser = require('./user').router

app.use(express.json())
app.use(express.static(path.join(__dirname, '../dist')))

app.use(session({
  secret: 'Smk09182309164ksjndvclk',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

if (API_ENABLED) {
  app.use('/api/auth', routeAuth)
  app.use('/api/contacts', routeContacts)
  app.use('/api/user', routeUser)
}
// app.get('/', (req, res)=>{
//   res.send(String(mongoose.connection.readyState))
// })

io.on('connection', socket => {
  socket.on('message', data => {
    console.log(data)
  })
})

http.listen(PORT, function () {
  console.log(`API Listening on port ${PORT}...`)
})

// export default (app, http) => {
//   app.use(express.json());

//   app.use(express.static(path.join(__dirname, '../dist')))

//   // app.get('/', (req, res)=>{
//   //   res.json({})
//   // })

//   //
//   // app.get('/foo', (req, res) => {
//   //   res.json({msg: 'foo'});
//   // });
//   //
//   // app.post('/bar', (req, res) => {
//   //   res.json(req.body);
//   // });
//   // 
//   // optional support for socket.io
//   // 
//   let io = socketIO(http);
//   io.on("connection", client => {
//     client.on("message", function (data) {
//       // do something
//       console.log(data)
//     });
//     client.emit("message", "Welcome");
//   });
// }
