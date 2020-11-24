const createEntities = require('./measurement.entities');

// mongoose orm
const mongoose = require('./measurement.orm.mongodb.setup');
const makeMongoDBModel = require('./measurement.orm.mongodb.model');
const mongoDBModel = makeMongoDBModel({database: mongoose});
const entities = createEntities({ORM: mongoDBModel});

module.exports = {
  measurement: entities,
  DB: mongoose,
}