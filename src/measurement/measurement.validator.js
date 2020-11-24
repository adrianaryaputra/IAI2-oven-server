const utils = require('../utils')
const POSTSchema = require('./measurement.validator.post');
const httpGetQuerySchema = require('./measurement.validator.get');


module.exports = Object.freeze({
  validatePost: (obj) => { 
    return validateJoi({
      obj, 
      schema: POSTSchema
    }); 
  },
  validateGetQuery: (obj) => { 
    return validateJoi({
      obj, 
      schema: httpGetQuerySchema
    }); 
  },
});


function validateJoi({obj, schema}){
  const {value, error} = schema.validate(obj);
  if(error){
    throw error;
  }
  else{
    return utils.obj.removeEmptyKey(value);
  }
}