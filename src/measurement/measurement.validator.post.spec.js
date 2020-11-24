const validator = require('./measurement.validator');
const makeFakeMeasurement = require('./__test__/fakeMeasurement');
const utils = require('../utils');
const { ValidationError } = require('joi');

describe('validate measurement schema', () => {

  it('have no problem', () => {
    const measurement = makeFakeMeasurement();
    const check = validator.validatePost(measurement);
    measurement.mac_address = measurement.mac_address.replace(/:/g,'-').toUpperCase();
    expect(check).toMatchObject(measurement);
  });


  it('require mac address', () => {
    const measurement = makeFakeMeasurement({mac_address: undefined});
    expect(() => {
      validator.validatePost(measurement)
    }).toThrow(ValidationError);
  });


  it('deny invalid mac address', () => {
    const measurement = makeFakeMeasurement({mac_address: 'invalidMac'});
    expect(() => {
      validator.validatePost(measurement)
    }).toThrow(ValidationError);
  });


  it('required measurement', () => {
    const measurement = makeFakeMeasurement({measurement: undefined});
    expect(() => {
      const e = validator.validatePost(measurement);
      console.log(e)
    }).toThrow(ValidationError);
  });
  
});