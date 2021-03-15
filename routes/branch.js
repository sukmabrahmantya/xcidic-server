'use strict'

const router = require('express').Router()
const branch = require('../controller/branchController')

router.post('/', branch.createBranch)
router.get('/', branch.getBranchs)
router.get('/:id', branch.getBranch)
router.patch('/:id', branch.updateBranch)
router.delete('/:id', branch.deleteBranch)

module.exports = router