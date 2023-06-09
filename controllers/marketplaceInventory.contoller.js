const { CarDetailsModel } = require('../models/Marketplace_Inventory.model')

const getCars = async (req, res) => {
  // price: { $gte: minPrice, $lte: maxPrice },
  //   colors: { $in: colors },
  //   kms: { $gte: minMileage, $lte: maxMileage }

  try {
    let {
      maxPrice,
      minPrice,
      maxMileage,
      minMileage,
      color,
      page,
      limit,
      text,
    } = req.query
    console.log('dd', req.query)
    let obj = {}
    if (maxPrice && minPrice) obj.price = { $gte: +minPrice, $lte: +maxPrice }
    if (maxMileage && minMileage)
      obj['OEM.mileage'] = { $gte: minMileage, $lte: maxMileage }
    if (color) obj.orginalPaint = color
    if (text) obj.title = { $regex: text, $options: 'i' }

    page = page || 1

    limit = limit || 15
    console.log('obj', obj)

    let allCars = await CarDetailsModel.find({
      ...obj,
    })
      .skip((page - 1) * limit)
      .limit(limit)
    const totalCars = await CarDetailsModel.countDocuments()
    res.status(200).send({ allCars, totalCars })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
const getDealersCar = async (req, res) => {
  let dealerId = req.body.userId

  try {
    let allCars = await CarDetailsModel.find({ userId: dealerId })
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

module.exports = { addCar, getCars, updateCar, deleteCar, getDealersCar }
