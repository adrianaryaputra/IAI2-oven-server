module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    const nonValidated = {
      name: httpRequest.query.name,
    };

    const casesList = cases.list;

    try{
      const validated = validator(nonValidated);
      const casesDevice = await casesList(validated);
      // console.log(casesDevice);
        
      return {
        headers: headers,
        statusCode: 200,
        body: {
          success: true,
          payload: casesDevice,
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