module.exports = ({entities, measurementEntities}) => {

    return async(query) => {
  
        const device = entities();
        const measurement = measurementEntities();
        
        if(query.id){ result = await device.findById(query.id).submit(); }
        else{ result = await device.sort(1).submit(); }
        
        const result2 = new Array();

        for(dev of result){
            mac = dev.mac_address;
            // last = await measurement.findByMac(mac).sort(-1).limit(1).submit();
            last = await measurement.latestByMac(mac);
            tuning = await measurement.getSensor(mac);
            dev.last_measurement = last;
            result2.push({
                ...dev._doc,
                last_measurement: last[0],
                scaler: tuning.scaler,
                refresh_time: tuning.refresh_time,
            })
        }
        
        return result2;
  
    }
  
}