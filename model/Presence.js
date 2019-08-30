var mongoose = require('mongoose')
const moment = require('moment')
var now = moment()
var absenSchema = new mongoose.Schema({


    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    date: {
        type: String,
        required: true
    },
 
    time: {
        type: String,
        required: true
        
    }
    
})

module.exports = mongoose.model('Presence',absenSchema)

