const Joi = require('joi')

const LoadSchema = Joi.object({
  position: Joi.string(),
  roll_num: Joi.string(),
  alloy_type: Joi.string(),
  dimension: Joi.object({
    width: Joi.number(),
    length: Joi.number(),
    thick: Joi.number(),
  }),
  od: Joi.number(),
  core_diameter: Joi.number(),
  remark: Joi.string(),
  weight: Joi.number(),
});

module.exports = Joi.object({
  id: Joi.string().required(),
  lot_num: Joi.number(),
  spk_num: Joi.string(),
  spk_date: Joi.date(),
  furnace: Joi.string(),
  operator: Joi.object({
    start: Joi.string(),
    finish: Joi.string(),
  }),
  special: Joi.bool(),
  temper: Joi.string(),
  start_date: Joi.date(),
  temperature: Joi.array().items(Joi.number()),
  duration: Joi.array().items(Joi.number()),
  cooling: Joi.number(),
  load: Joi.array().items(LoadSchema),
  mac_address: Joi.string(),
  isFinish: Joi.bool(),
})