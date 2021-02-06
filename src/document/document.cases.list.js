module.exports = ({entities}) => {

    return async(query) => {
  
        let device = entities();

        console.log(query);
        
        if(query.id){ device = device.findById(query.id) }
        if(query.lot_num){ device = device.findByLotNum(query.lot_num) }
        if(query.unfinished){ device = device.findUnfinishedState() }
        
        result = await device.sort(-1).limit(50).submit();

        return result;
  
    }
  
}