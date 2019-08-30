const router = require('express').Router()
const verify = require('../verifyToken')

router.post('/absen',verify,(req,res)=> {

const usernameExist = await usernameExist.findOne({username:req.body.username})
if(usernameExist) {
 
}

})

module.exports = router