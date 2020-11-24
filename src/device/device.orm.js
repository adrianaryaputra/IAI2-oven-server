const createEntities = require('./device.entities');

// mongoose orm
const mongoose = require('./device.orm.mongodb.setup');
const makeMongoDBModel = require('./device.orm.mongodb.model');
const mongoDBModel = makeMongoDBModel({database: mongoose});
const entities = createEntities({ORM: mongoDBModel});

module.exports = {
  entities,
  DB: mongoose,
}