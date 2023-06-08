const { OEM_SpecsModel } = require('../models/OEM_Specs.model')

const getCarSpecs = async (req, res) => {
  try {
    let { text } = req.query
    text = text || ''

    let carSpecs = await OEM_SpecsModel.find({
      modelName: { $regex: text, $options: 'i' },
    })
    res.status(200).send(carSpecs)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
const addCarSpecs = async (req, res) => {
  try {
    let carSpecs = req.body
    carSpecs = new OEM_SpecsModel(carSpecs)
    await carSpecs.save()
    res.status(201).send({ msg: 'car specification added' })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
module.exports = { getCarSpecs, addCarSpecs }
