// import {chalk} from 'chalk';
const youShouldNeverUseVar = 'Soy corto';

function myFunction(used, nonUsed) {
  if (used) {
    console.log(used);
  } else if (nonUsed) {
    console.log(youShouldNeverUseVar);
  }
}

module.exports = myFunction;
