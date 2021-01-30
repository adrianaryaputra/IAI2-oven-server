module.exports = ({cases, validator}) => {

  return async (httpRequest) => {

    const headers = {
      'Content-Type': 'application/json',
    };

    const nonValidated = {
      lot_num: httpRequest.body.lot_num,
      spk_num: httpRequest.body.spk_num,
      spk_date: httpRequest.body.spk_date,
      furnace: httpRequest.body.furnace,
      operator: httpRequest.body.operator,
      special: httpRequest.body.special,
      temper: httpRequest.body.temper,
      start_date: httpRequest.body.start_date,
      temperature: httpRequest.body.temperature,
      duration: httpRequest.body.duration,
      cooling: httpRequest.body.cooling,
      load: httpRequest.body.load,
      mac_address: httpRequest.body.mac_address,
    };

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