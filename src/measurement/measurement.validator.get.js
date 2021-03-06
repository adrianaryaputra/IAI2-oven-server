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

  date_from: Joi.date(),
  date_to: Joi.date(),
  limit: Joi
    .number()
    .min(1),
  get_all_mac: Joi.any(),

});

