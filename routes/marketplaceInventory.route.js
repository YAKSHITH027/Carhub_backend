const express = require('express')
const {
  getCars,
  addCar,
  updateCar,
  deleteCar,
  getDealersCar,
  getSingleCar,
} = require('../controllers/marketplaceInventory.contoller')
const { isAuthonticated } = require('../middlewares/isAuthonticated')

const marketplaceInventory = express.Router()

marketplaceInventory.get('/dealer', isAuthonticated, getDealersCar)
marketplaceInventory.get('/', getCars)
marketplaceInventory.get('/:carId', getSingleCar)
marketplaceInventory.post('/add', isAuthonticated, addCar)
marketplaceInventory.patch('/update/:carId', isAuthonticated, updateCar)
marketplaceInventory.delete('/delete/:carId', isAuthonticated, deleteCar)

module.exports = { marketplaceInventory }
