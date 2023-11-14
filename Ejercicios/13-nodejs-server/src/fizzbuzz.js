const generateFizzBuzzSequence = (number) => {
  const sequence = [];

  for (let i = 1; i <= number; i++) {
    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    sequence.push(result || i);
  }

  return sequence;
};

export default generateFizzBuzzSequence;
