//Ejercicio1
import emoji from 'emoji-black-joker';

console.log(emoji);
console.log('.................................................');

//Ejercicio2

// CJS
import {faker} from '@faker-js/faker';
import chalk from 'chalk';

function createRandomUser() {
  return {
    username: faker.internet.userName(),
  };
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

const USERS = Array.from({ length: 5 }, createRandomUser);

USERS.forEach(user => {
const color = getRandomColor();
console.log(chalk.hex(color)(JSON.stringify(user)));
});

console.log('.................................................');

//Ejercicio3
import date from 'date-and-time';

const printFormattedDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const time = date.format(now, 'HH:mm:ss');

    if (seconds === 0 || seconds % 10 === 0) {
        console.log(`${date.format(now, 'DD/MM/YYYY')} ${chalk.green(time)}`);
    } else {
        console.log(`${date.format(now, 'DD/MM/YYYY')} ${time}`);
    }
};

setInterval(printFormattedDate, 1000);