import { fizzBuzz } from '../src/fizzbuzz.js';

const expectedResults = {
  1: 1,
  2: 2,
  3: 'fizz',
  4: 4,
  5: 'buzz',
  15: 'fizzbuzz',
  30: 'fizzbuzz',
  35: 'buzz'
};

describe('fizzBuzz', () => {
  test.each(Object.entries(expectedResults))(
    'Should be %s for n = %s',
    (expectedResult, number) => {
      const result = fizzBuzz(parseInt(number));
      expect(result).toBe(expectedResult);
    }
  );

  test('should throw an error for n = -1', () => {
    expect(() => {
      fizzBuzz(-1);
    }).toThrow('Number must be greater than 0');
  });
});
