const Joi = require('joi');

module.exports = Joi.object({
  lot_num: Joi.string(),
  id: Joi.string(),
});

