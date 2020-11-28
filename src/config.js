module.exports = Object.freeze({

  VERSION: 'v0',
  HTTP_PORT: 
    process.env.MEASUREMENT_HTTP_PORT ||
    '5000',

  DB_ADDRESS:
    process.env.MEASUREMENT_DB_ADDRESS ||
    'mongodb://localhost:27017/iai2-oven-test',

  QUERY_LIMIT: 1000,
  QUERY_DEFAULT: 20,

});