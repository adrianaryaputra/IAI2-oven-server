module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    const nonValidated = new Object();
    let keys = ['id', 'lot_num', 'unfinished'];
    for (key of keys){
      if(httpRequest.query[key]) nonValidated[key] = httpRequest.query[key];
    }

    const casesList = cases;

    try{
      const validated = validator(nonValidated);
      const casesL = await casesList(validated);
        
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