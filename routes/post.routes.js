const express = require('express')
const controler = require('../controller/post.controller')
const verifyToken = require('../midleware/auth')
const router = express.Router()

router.post('/register',verifyToken,controler.register)
router.post('/update',verifyToken,controler.update)
router.post('/list',verifyToken,controler.list)
router.post('/find',verifyToken,controler.findOne)
//--------------
module.exports = router;