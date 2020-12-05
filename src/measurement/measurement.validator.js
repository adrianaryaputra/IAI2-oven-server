const utils = require('../utils')
const POSTSchema = require('./measurement.validator.post');
const httpGetQuerySchema = require('./measurement.validator.get');
const sensorSchema = require('./measurement.validator.sensor');


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
  validateSensorQuery: (obj) => {
    return validateJoi({
      obj,
      schema: sensorSchema
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