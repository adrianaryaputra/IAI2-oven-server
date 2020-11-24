const {entities} = require('./device.orm');
const {measurement} = require('../measurement/measurement.orm');

const makeList = require('./device.cases.list');
const list = makeList({
  entities: entities,
  measurementEntities: measurement,
});

const makeCreate = require('./device.cases.create');
const create = makeCreate({entities: entities});

const makeEdit = require('./device.cases.edit');
const edit = makeEdit({entities: entities});

module.exports = Object.freeze({
  list,
  create,
  edit,
})