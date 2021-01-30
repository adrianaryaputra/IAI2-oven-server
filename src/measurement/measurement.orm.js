const createEntities = require('./measurement.entities');

// mongoose measurement orm
const mongoose = require('./measurement.orm.mongodb.setup');
const makeMeasurementDBModel = require('./measurement.orm.mongodb.model');
const measurementDBModel = makeMeasurementDBModel({database: mongoose});
const makeLatestDBModel = require('./latest.orm.mongodb.model');
const latestDBModel = makeLatestDBModel({database: mongoose});
const makeSensorDBModel = require('./sensor.orm.mongodb.model');
const sensorDBModel = makeSensorDBModel({database: mongoose});

const entities = createEntities({
  measurementORM: measurementDBModel,
  sensorORM: sensorDBModel,
  latestORM: latestDBModel,
});

module.exports = {
  measurement: entities,
  DB: mongoose,
}