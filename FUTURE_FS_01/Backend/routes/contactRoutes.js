const contactController  = require('../controllers/contactMessageController')
const express = require('express')

const router = express.Router()
router.post('/submit',contactController.submitForm)
router.get('/messages',contactController.getAllMessage)
router.get('/messages/:id',contactController.getAllMessageById)
router.delete('/messages/:id',contactController.deleteMessage)

module.exports = router