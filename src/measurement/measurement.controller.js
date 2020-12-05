const {
    listMeasurement,
    createMeasurement,
    editSensor,
} = require('./measurement.cases');

const validator = require('./measurement.validator');

const makeGetMeasurement = require('./measurement.controller.get');
const makePostMeasurement = require('./measurement.controller.post');
const makeSensorController = require('./measurement.controller.sensor');

const getMeasurement = makeGetMeasurement({
    listMeasurement, 
    validator: validator,
});

const postMeasurement = makePostMeasurement({
    createMeasurement: createMeasurement, 
    validator: validator,
});

const sensorController = makeSensorController({
    sensorControl: editSensor,
    validator: validator,
})

module.exports = Object.freeze({
    getMeasurement,
    postMeasurement,
    sensorController,
});