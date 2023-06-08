const express = require('express')
const { getCarSpecs, addCarSpecs } = require('../controllers/OEM.controller')

const OEM = express.Router()

OEM.get('/', getCarSpecs)
OEM.post('/add', addCarSpecs)

module.exports = { OEM }
