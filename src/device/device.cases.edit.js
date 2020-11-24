module.exports = ({entities}) => {

    return async(body) => {

        // TODO: get by id, replace name and mac address
        
        // convert mac address to number
        if(body.mac_address){
            body.mac_address = body.mac_address.map((mac) => {
                return parseInt(mac.replace(/([\W])/gi, ''), 16);
            });
        }
    
        const device = entities();
        result = await device.updateById(body.id, {
            mac_address: body.mac_address,
            name: body.name,
        });

        return result;
  
    }
  
}