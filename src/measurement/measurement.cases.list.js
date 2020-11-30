module.exports = ({measurement: entities}) => {

    return async (query) => {
  
        const measurement = entities();
    
        if(query.mac_address){
            const macAddressStr = query.mac_address.replace(/([\W])/gi, '');
            query.mac_address = parseInt(macAddressStr,16);
            measurement.findByMac(query.mac_address);
        }
        if(query.date_from) measurement.dateFrom(query.date_from);
        if(query.date_to) measurement.dateTo(query.date_to);
        measurement.sort(-1);
        if(query.limit) measurement.limit(query.limit);
        
        if(query.get_all_mac){
            return measurement.getAllMac();
        }
    
        result = await measurement.submit();
        return result;
  
    }
  
}