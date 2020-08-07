const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://smk:321654987@cluster0.svqlm.gcp.mongodb.net/msgr?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports = mongoose