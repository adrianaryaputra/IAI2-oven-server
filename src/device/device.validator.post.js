const Joi = require('joi')

const joiMac = Joi.string()
                  .required()
                  .pattern(
                    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
                  )
                  .replace(/:/g, '-');

module.exports = Joi.object({
  mac_address: Joi.array().items(joiMac).required(),
  name: Joi.string().required()
}).required()