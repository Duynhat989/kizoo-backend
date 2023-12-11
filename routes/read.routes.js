const express = require('express')
const controler = require('../controller/read.controller')
const verifyToken = require('../midleware/auth')
const router = express.Router()

router.post('/recognize',verifyToken,controler.recognize)
router.post('/analysis',verifyToken,controler.analysis)
//--------------
module.exports = router;