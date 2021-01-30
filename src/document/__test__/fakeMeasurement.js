var faker = require('faker');
const { bool } = require('joi');
const { boolean } = require('yargs');
faker.locale = "en_US";

module.exports = (override) => {

  const measurement = {
    mac_address: faker.internet.mac().replace(/:/g,'-').toUpperCase(),
    measurement: {
      temperature: [
        faker.random.number({min:28, max:30, precision:0.01}),
        faker.random.number({min:28, max:30, precision:0.01}),
        faker.random.number({min:28, max:30, precision:0.01}),
      ],
      digital: [0, 0, 0, 0],
    },
  }

  return {
    ...measurement,
    ...override,
  }

}