const sqlite = require('sqlite-sync')
const path = require('path')

class DBase {
    sqlite = null
    constructor(filename) {
        this.sqlite = sqlite.connect(filename)
    }
    insert_user(name, email, password){

    }
}

module.exports = DBase