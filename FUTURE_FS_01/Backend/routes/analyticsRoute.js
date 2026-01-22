const express = require('express')
const analyticsController = require('../controllers/analyticsController')
const router = express.Router()

router.get('/stat',analyticsController.getStat)
router.post('/track',analyticsController.trackPageView)

module.exports = router