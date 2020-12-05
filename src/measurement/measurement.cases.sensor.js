module.exports = ({ORM}) => {

    return async(body) => {

        // convert mac address to number
        const macList = body.mac_address.map((mac) => {
            return parseInt(mac.replace(/([\W])/gi, ''), 16);
        });

        const submitted = Object();

        if(body.scaler){
            submitted.scaler = Object();
            if(body.scaler.gain) submitted.scaler.gain = body.scaler.gain
            if(body.scaler.shift) submitted.scaler.shift = body.scaler.shift
        }
        if(body.refresh_time) submitted.refresh_time = body.refresh_time

        const measurement = ORM();
        result = await measurement.editSensor(macList, submitted);
        return result;
  
    }
  
}