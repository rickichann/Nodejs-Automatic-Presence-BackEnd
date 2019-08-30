const router = require('express').Router()
const verify = require('./verifyToken')
const Presence = require('../model/Presence')
const User = require('../model/User')
var moment = require('moment')
var now = new moment()

router.post('/', verify, async (req, res) => {
    const usernameExist = await User.findOne({ username: req.body.username})
    // if (usernameExist) return res.status(400).send('Absens Succesfully')
    const usernameExist2 = await Presence.findOne({username:req.body.username})
    const dateExist = await Presence.findOne({date :req.body.date})
    
    if (usernameExist){
        // if(usernameExist2 && dateExist){ 
            var presence = new Presence({
                username : req.body.username,
                date : req.body.date,
                time : req.body.time 
            })      
            try {
                var savePresence = await presence.save()
                console.log(now.format('HH:mm:ss'));
                res.send('Absen Sucesfully') 
            }catch{ 
                }
        } else { 
            res.status(401).send('Absen Unsuccessfull')
        // }
    }
})

module.exports = router 























const assert = require('assert')
// router.get('/',verify,(req,res)=> {
//     res.json({
//         posts: {
//             title: 'My firts post',
//             description: ' random data you shouldtn acces' 
//         }
//     }) 
//     // res.send(req.user)
//     // User.findbyOne({id: req.user})
// })
