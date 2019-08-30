const mongoose = require('mongoose')
var moment = require('moment')
var now = moment()

var absenSchema = new mongoose.Schema({
    DateAndTime: {
        type : String,
        default : now.format('YYYY-MM-DD HH:mm:ss')
    }
})

var userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
 
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },

    // nis: {
    //     type:String,
    //     required:true,
    //     min : 2,
    //     max:30
    // },

    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    
    date:{
        type: String,
        default: now.format('YYYY-MM-DD HH:mm:ss')
    },

    Absence:{
        absence : [absenSchema]
     }

})





module.exports = mongoose.model('User',userSchema) 