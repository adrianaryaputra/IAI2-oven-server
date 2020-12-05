module.exports = function({ sensorControl, validator }){
  return async function getMeasurement(httpRequest){

    const headers = {
      'Content-Type': 'application/json',
    }

    const nonvalidatedQuery = {
      mac_address: httpRequest.body.mac_address,
      scaler : httpRequest.body.scaler,
      refresh_time: httpRequest.body.refresh_time
    }
    
    try{

      const validatedQuery = validator.validateSensorQuery(nonvalidatedQuery);
      const measurementBody = await sensorControl(validatedQuery);
      
      return {
        headers: headers,
        statusCode: 200,
        body: {
          server_time: new Date().toISOString(),
          success: true,
          payload: measurementBody,
        },
      }

    } catch(e) {
      
      return {
        headers: headers,
        statusCode: 400,
        body: {
          success: false,
          error: e.message,
        },
      }
      
    }

  }
}