const {
    getMeasurement,
    postMeasurement,
} = require('./measurement.controller')
  
module.exports = ({httpRouter, httpCallback, httpAddress}) => {
    
    httpRouter.get(
        httpAddress, 
        httpCallback(getMeasurement)
    );
  
    httpRouter.post(
        httpAddress,
        httpCallback(postMeasurement)
    );
  
    return httpRouter;

}