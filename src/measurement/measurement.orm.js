const createEntities = require('./measurement.entities');

// mongoose measurement orm
const mongoose = require('./measurement.orm.mongodb.setup');
const makeMeasurementDBModel = require('./measurement.orm.mongodb.model');
const measurementDBModel = makeMeasurementDBModel({database: mongoose});
const makeSensorDBModel = require('./sensor.orm.mongodb.model');
const sensorDBModel = makeSensorDBModel({database: mongoose});

const entities = createEntities({
  measurementORM: measurementDBModel,
  sensorORM: sensorDBModel,
});

module.exports = {
  measurement: entities,
  DB: mongoose,
}