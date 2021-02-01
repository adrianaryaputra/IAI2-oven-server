const Joi = require('joi');

module.exports = Joi.object({
  lot_num: Joi.string(),
  unfinished: Joi.bool(),
  id: Joi.string(),
});

