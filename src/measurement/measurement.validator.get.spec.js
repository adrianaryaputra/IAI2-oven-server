const validator = require('./measurement.validator');
const makeFakeGetQuery = require('./__test__/fakeGetQuery');
const { ValidationError } = require('joi');

describe('validate measurement schema', () => {


  it('have no problem', () => {
    const fakeGetQuery = makeFakeGetQuery();
    const check = validator.validateGetQuery(fakeGetQuery);
    fakeGetQuery.mac_address = fakeGetQuery
      .mac_address
      .replace(/:/g,'-')
      .toUpperCase();
    expect(check).toMatchObject(fakeGetQuery);
  });


  it('can accept array of mac address', () => {
    const fakeMac = [
      "AA-BB-CC-DD-EE-00",
      "AA-BB-CC-DD-EE-01"
    ];
    const fakeGetQuery = makeFakeGetQuery({
      mac_address: fakeMac,
    });

    const check = validator.validateGetQuery(fakeGetQuery);
    expect(check).toMatchObject(fakeGetQuery);
  });


  it('deny invalid mac address', () => {
    const fakeGetQuery = makeFakeGetQuery({mac_address: 'invalid'});
    expect(() => {
      validator.validateGetQuery(fakeGetQuery);
    }).toThrow(ValidationError)
  });

  
  it('deny invalid date_from', () => {
    const fakeGetQuery = makeFakeGetQuery({date_from: 'invalid'});
    expect(() => {
      validator.validateGetQuery(fakeGetQuery);
    }).toThrow(ValidationError)
  });


  it('deny invalid date_to', () => {
    const fakeGetQuery = makeFakeGetQuery({date_to: 'invalid'});
    expect(() => {
      validator.validateGetQuery(fakeGetQuery);
    }).toThrow(ValidationError)
  });


  it('deny invalid limit', () => {
    const fakeGetQuery = makeFakeGetQuery({limit: 'invalid'});
    expect(() => {
      validator.validateGetQuery(fakeGetQuery);
    }).toThrow(ValidationError)
  });


});