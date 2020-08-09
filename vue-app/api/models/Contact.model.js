const mongoose = require('mongoose')

let ContactModel = new mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    contact_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('Contact', ContactModel)