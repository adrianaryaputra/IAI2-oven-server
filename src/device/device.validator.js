const utils = require('../utils')
const PostSchema = require('./device.validator.post');
const GetQuerySchema = require('./device.validator.get');
const PutSchema = require('./device.validator.put');


module.exports = Object.freeze({
  validatePost: (obj) => { 
    return validateJoi({
      obj, 
      schema: PostSchema
    }); 
  },
  validateGetQuery: (obj) => { 
    return validateJoi({
      obj, 
      schema: GetQuerySchema
    }); 
  },
  validatePut: (obj) => { 
    return validateJoi({
      obj, 
      schema: PutSchema
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