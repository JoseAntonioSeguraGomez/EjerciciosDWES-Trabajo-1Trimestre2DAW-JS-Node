export function generateFizzBuzzSequence(number) {
  let result = '';
  for (let i = 1; i <= parseInt(number); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz ';
    } else if (i % 3 === 0) {
      result += 'Fizz ';
    } else if (i % 5 === 0) {
      result += 'Buzz ';
    } else {
      result += `${i} `;
    }
  }
  return result;
}
