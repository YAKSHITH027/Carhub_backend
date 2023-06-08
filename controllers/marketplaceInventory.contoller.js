const { CarDetailsModel } = require('../models/Marketplace_Inventory.model')

const getCars = async (req, res) => {
  try {
    let allCars = await CarDetailsModel.find()
    res.status(200).send(allCars)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
const addCar = async (req, res) => {
  try {
    let body = req.body
    let newCar = new CarDetailsModel(body)
    await newCar.save()
    res.status(201).send({ msg: 'new Car added' })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
const deleteCar = async (req, res) => {
  let carId = req.params.carId

  try {
    await CarDetailsModel.findByIdAndDelete({ _id: carId })

    res.status(200).send({ msg: 'car details has been deleted' })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
const updateCar = async (req, res) => {
  try {
    let carId = req.params.carId
    console.log(req.params)
    console.log(carId)
    await CarDetailsModel.findByIdAndUpdate({ _id: carId }, req.body)

    res.status(200).send({ msg: 'car details has updated' })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = { addCar, getCars, updateCar, deleteCar }
