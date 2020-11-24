module.exports = ({createMeasurement, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    }

    const nonvalidatedBody = {
      mac_address: httpRequest.body.mac_address,
      measurement: httpRequest.body.measurement,
    }

    try{

      const validatedBody = validator.validatePost(nonvalidatedBody);
      const measurementBody = await createMeasurement(validatedBody);
      
      return {
        headers: headers,
        statusCode: 200,
        body: {
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