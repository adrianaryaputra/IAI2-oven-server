module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    const nonValidated = new Object();
    if(httpRequest.query.id) 
      nonValidated.id = httpRequest.query.id;

    try{
      const validated = validator(nonValidated);
      const casesL = await cases(validated);
        
      return {
        headers: headers,
        statusCode: 200,
        body: {
          server_time: new Date().toISOString(),
          success: true,
          payload: casesL,
        },
      }
    } catch(e) {
      console.error(e);
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