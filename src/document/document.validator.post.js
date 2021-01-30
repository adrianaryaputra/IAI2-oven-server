const Joi = require('joi')

const LoadSchema = Joi.object({
  position: Joi.string().required(),
  roll_num: Joi.string().required(),
  alloy_type: Joi.string().required(),
  dimension: Joi.object({
    width: Joi.number().required(),
    length: Joi.number().required(),
    thick: Joi.number().required(),
  }).required(),
  od: Joi.number().required(),
  remark: Joi.string(),
  weight: Joi.number().required(),
}).required();

module.exports = Joi.object({
  id: Joi.string(),
  lot_num: Joi.number().required(),
  spk_num: Joi.string().required(),
  spk_date: Joi.date().required(),
  furnace: Joi.string().required(),
  operator: Joi.object({
    start: Joi.string().required(),
    finish: Joi.string().required(),
  }).required(),
  special: Joi.bool().required(),
  temper: Joi.string().required(),
  start_date: Joi.date().required(),
  temperature: Joi.array().items(Joi.number()).required(),
  duration: Joi.array().items(Joi.number()).required(),
  cooling: Joi.number().required(),
  load: Joi.array().items(LoadSchema).required(),
  mac_address: Joi.string().required(),
}).required()