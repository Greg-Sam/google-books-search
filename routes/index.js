const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./gbooksRoutes.js'))

module.exports = router
