module.exports = ({entities}) => {

    return async(body) => {

        // convert mac address to number
        body.mac_address = body.mac_address.map((mac) => {
            return parseInt(mac.replace(/([\W])/gi, ''), 16);
        });
    
        const device = entities();
        result = await device.create(body);
        return result;
  
    }
  
}