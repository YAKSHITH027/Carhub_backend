const mongoose = require('mongoose')

const OEM_SpecsSchema = mongoose.Schema(
  {
    modelName: {
      type: String,
      required: true,
    },
    yearOfModel: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: {
      type: [{ type: String }],
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const OEM_SpecsModel = mongoose.model('OEM_Specs', OEM_SpecsSchema)

module.exports = {
  OEM_SpecsModel,
  OEM_SpecsSchema,
}
