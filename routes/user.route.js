const express = require('express')
const { register, login } = require('../controllers/user.controller')

const user = express.Router()

user.post('/register', register)
user.post('/login', login)

module.exports = { user }
