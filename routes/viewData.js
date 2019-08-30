const router = require('express').Router()
const Presence = require('../model/Presence')
var moment = require('moment')
var now = new moment()

router.put('/',async (req,res) => {  
    var presence = new Presence({
        username : req.body.username,
        date : now.calendar(),
        time : now.format('LT')
})
    try{
        await presence.save()
        res.send('Send')
    }catch{

    }
})
module.exports = router
