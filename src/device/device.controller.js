const {
    list,
    create,
    edit,
} = require('./device.cases');

const {
    listMeasurement
} = require('../measurement/measurement.cases');

const validator = require('./device.validator');

const makeGet = require('./device.controller.get');
const makePost = require('./device.controller.post');
const makePut = require('./device.controller.put');


const getDevice = makeGet({
    cases: {list, listMeasurement}, 
    validator: validator.validateGetQuery,
});

const postDevice = makePost({
    cases: create, 
    validator: validator.validatePost,
});

const putDevice = makePut({
    cases: edit, 
    validator: validator.validatePut,
});

module.exports = Object.freeze({
    getDevice,
    postDevice,
    putDevice, 
});