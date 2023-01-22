const express = require('express')
const controller = require('./authController')
const router = express.Router()

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router