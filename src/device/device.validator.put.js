const Joi = require('joi')

const joiMac = Joi.string()
                  .pattern(
                    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
                  )
                  .replace(/:/g, '-');

module.exports = Joi.object({
  mac_address: Joi.array().items(joiMac),
  name: Joi.string(),
  id: Joi.string().required()
}).required()