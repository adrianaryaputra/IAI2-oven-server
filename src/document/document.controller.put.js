module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    let nonValidated = new Object();

    let keys = [
      'id', 'lot_num', 'spk_num', 'spk_date',
      'furnace', 'operator', 'special', 'temper',
      'start_date', 'temperature', 'duration',
      'cooling', 'load', 'isFinish',
    ]

    for (key of keys){
      if(httpRequest.body[key]) nonValidated[key] = httpRequest.body[key];
    }
    
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