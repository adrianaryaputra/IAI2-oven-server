const createEntities = require('./document.entities');

// mongoose orm
const mongoose = require('./document.orm.mongodb.setup');
const makeMongoDBModel = require('./document.orm.mongodb.model');
const mongoDBModel = makeMongoDBModel({database: mongoose});
const entities = createEntities({ORM: mongoDBModel});

module.exports = {
  entities,
  DB: mongoose,
}