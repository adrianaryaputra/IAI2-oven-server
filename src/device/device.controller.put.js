module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    const nonValidated = {
      id: httpRequest.body.id,
    };

    if(httpRequest.body.mac_address) nonValidated.mac_address = httpRequest.body.mac_address;
    if(httpRequest.body.name) nonValidated.name = httpRequest.body.name;

    try{
      const validated = validator(nonValidated);
      const casesResult = await cases(validated);
        
      return {
        headers: headers,
        statusCode: 200,
        body: {
          server_time: new Date().toISOString(),
          success: true,
          payload: casesResult,
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