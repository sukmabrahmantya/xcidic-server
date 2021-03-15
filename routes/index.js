'use strict'

const router = require('express').Router()
const branchRoutes = require('./branch')
const buffetRoutes = require('./buffet')

router.use('/branch', branchRoutes)
router.use('/buffet', buffetRoutes)

module.exports = router
