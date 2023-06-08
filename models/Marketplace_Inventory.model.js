const mongoose = require('mongoose')
const { OEM_SpecsSchema } = require('./OEM_Specs.model')

const carDetailsSchema = mongoose.Schema(
  {
    kms: { type: Number, required: true },
    majorScratches: { type: String, required: true },
    price: { type: Number, required: true },
    orginalPaint: { type: String, required: true },
    numberOfAccidents: { type: Number, required: true },
    prevBuyers: { type: Number, required: true },
    registrationPlace: { type: String, required: true },
    OEM: OEM_SpecsSchema,
    userId: { type: String, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String },
  },
  {
    versionKey: false,
  }
)

const CarDetailsModel = mongoose.model('carDetail', carDetailsSchema)

module.exports = {
  CarDetailsModel,
}
