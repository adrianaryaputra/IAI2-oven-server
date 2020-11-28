module.exports = ({entities, measurementEntities}) => {

    return async(query) => {
  
        const device = entities();
        const measurement = measurementEntities();

        device.sort(1);
    
        if(query.name){
            device.findByName(query.name);
        }
    
        result = await device.submit();

        result2 = new Array();

        for(dev of result){
            mac = dev.mac_address;
            last = await measurement.findByMac(mac).sort(-1).limit(1).submit();
            dev.last_measurement = last;
            result2.push({
                ...dev._doc,
                last_measurement: last[0],
            })
        }
        
        return result2;
  
    }
  
}