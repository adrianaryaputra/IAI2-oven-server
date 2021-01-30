const {entities} = require('./document.orm');

const makeList = require('./document.cases.list');
const list = makeList({entities: entities});

const makeCreate = require('./document.cases.create');
const create = makeCreate({entities: entities});

const makeEdit = require('./document.cases.edit');
const edit = makeEdit({entities: entities});

const makeDelete = require('./document.cases.delete');
const deleter = makeDelete({entities: entities});

module.exports = Object.freeze({
  list,
  create,
  edit,
  deleter,
})