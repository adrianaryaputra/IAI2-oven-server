const {
    list,
    create,
    edit,
    deleter,
} = require('./document.cases');

const validator = require('./document.validator');

const makeGet = require('./document.controller.get');
const makePost = require('./document.controller.post');
const makePut = require('./document.controller.put');
const makeDelete = require('./document.controller.delete');


const getDocument = makeGet({
    cases: list, 
    validator: validator.validateGetQuery,
});

const postDocument = makePost({
    cases: create, 
    validator: validator.validatePost,
});

const putDocument = makePut({
    cases: edit, 
    validator: validator.validatePut,
});

const deleteDocument = makeDelete({
    cases: deleter, 
    validator: validator.validateDelete,
});

module.exports = Object.freeze({
    getDocument,
    postDocument,
    putDocument,
    deleteDocument,
});