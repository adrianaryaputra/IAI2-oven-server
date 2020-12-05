const {
    getMeasurement,
    postMeasurement,
    sensorController,
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

    httpRouter.post(
        httpAddress+'/sensor',
        httpCallback(sensorController)
    );
  
    return httpRouter;

}