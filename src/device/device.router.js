const {
    getDevice,
    postDevice,
    putDevice,
} = require('./device.controller')
  
module.exports = ({httpRouter, httpCallback, httpAddress}) => {
    
    httpRouter.get(
        httpAddress, 
        httpCallback(getDevice)
    );
  
    httpRouter.post(
        httpAddress,
        httpCallback(postDevice)
    );

    httpRouter.put(
        httpAddress,
        httpCallback(putDevice)
    );
  
    return httpRouter;

}