module.exports = ({entities}) => {

    return async(body) => {
        const device = entities();
        result = await device.create(body);
        return result;
    }
  
}