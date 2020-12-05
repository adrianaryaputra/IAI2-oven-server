const {measurement} = require('./measurement.orm');

const makeListMeasurement = require('./measurement.cases.list');
const listMeasurement = makeListMeasurement({measurement});

const makeCreateMeasurement = require('./measurement.cases.create');
const createMeasurement = makeCreateMeasurement({measurement});

const makeEditSensor = require('./measurement.cases.sensor');
const editSensor = makeEditSensor({ORM: measurement});

module.exports = Object.freeze({
  listMeasurement,
  createMeasurement,
  editSensor,
})