const {
    getDocument,
    postDocument,
    putDocument,
    deleteDocument,
} = require('./document.controller')
  
module.exports = ({httpRouter, httpCallback, httpAddress}) => {
    
    httpRouter.get(
        httpAddress,
        httpCallback(getDocument)
    );
  
    httpRouter.post(
        httpAddress,
        httpCallback(postDocument)
    );

    httpRouter.put(
        httpAddress,
        httpCallback(putDocument)
    );

    httpRouter.delete(
        httpAddress,
        httpCallback(deleteDocument)
    );
  
    return httpRouter;

}