module.exports = ({entities}) => {

    return async(query) => {
  
        let device = entities();
        return device.deleteObj({_id : query.id})
  
    }
  
}