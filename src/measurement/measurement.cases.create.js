module.exports = ({measurement: entities}) => {

    return async(body) => {
  
        body.timestamp = new Date();

        // convert mac address to number
        const macAddressStr = body.mac_address.replace(/([\W])/gi, '');
        body.mac_address = parseInt(macAddressStr,16);
        
    
        const measurement = entities();
        result = await measurement.create(body);
        return result;
  
    }
  
}