import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost')

function on(evname, callback) {
    socket.on(evname, callback)
}

function emit(evname, obj) {
    socket.emit(evname, obj)
}

export { on, emit }