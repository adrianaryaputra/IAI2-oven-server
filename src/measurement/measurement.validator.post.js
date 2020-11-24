const Joi = require('joi')

const joiMeasurement = Joi.object({
  temperature: Joi.array().items(Joi.number()),
  digital: Joi.array().items(Joi.number()),
})

module.exports = Joi.object({
  mac_address: Joi.string()
                  .required()
                  .pattern(
                    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
                  )
                  .replace(/:/g, '-'),

  measurement: joiMeasurement.required(),
}).required()