// CJS
const { faker } = require('@faker-js/faker');
const chalk = require('chalk');

function createRandomUser() {
  return {
    username: faker.internet.userName(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});


console.log(chalk.blue(USERS));
