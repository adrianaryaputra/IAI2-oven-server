module.exports = ({entities}) => {

    return async(body) => {
    
        const device = entities();
        result = await device.updateById(body);
        return result;
  
    }
  
}