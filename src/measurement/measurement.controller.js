const {
    listMeasurement,
    createMeasurement,
} = require('./measurement.cases');

const validator = require('./measurement.validator');

const makeGetMeasurement = require('./measurement.controller.get');
const makePostMeasurement = require('./measurement.controller.post');

const getMeasurement = makeGetMeasurement({
    listMeasurement, 
    validator: validator,
});

const postMeasurement = makePostMeasurement({
    createMeasurement: createMeasurement, 
    validator: validator,
});

module.exports = Object.freeze({
    getMeasurement,
    postMeasurement,
});