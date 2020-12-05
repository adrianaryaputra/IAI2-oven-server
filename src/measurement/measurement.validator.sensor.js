const Joi = require('joi');

const MacSchema = Joi
  .string()
  .pattern(
    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  )
  .replace(/:/g, '-')
  .uppercase();

module.exports = Joi.object({

  mac_address: Joi.alternatives().try(
    Joi.array().items(MacSchema),
    MacSchema,
  ),
  scaler: Joi.object({
    gain: Joi.number(),
    shift: Joi.number(),
  }),
  refresh_time: Joi.any(),

});

