'use strict'

const router = require('express').Router()
const buffet = require('../controller/buffetController')

router.post('/', buffet.createBuffet)
router.get('/', buffet.getBuffets)
router.get('/:id', buffet.getBuffet)
router.patch('/:id', buffet.updateBuffet)
router.delete('/:id', buffet.deleteBuffet)

module.exports = router

module.exports = router