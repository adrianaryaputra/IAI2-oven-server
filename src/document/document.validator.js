const utils = require('../utils')
const PostSchema = require('./document.validator.post');
const GetQuerySchema = require('./document.validator.get');
const PutSchema = require('./document.validator.put');
const DeleteSchema = require('./document.validator.delete');


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
  validateDelete: (obj) => { 
    return validateJoi({
      obj, 
      schema: DeleteSchema
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