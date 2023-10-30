import { fizzBuzz } from '../src/fizzbuzz.js';

describe('fizzBuzz function', () => {
  it('Should return 1 for n = 1', () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
  });

  it('Should return 2 for n = 2', () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });

  it('Should return "fizz" for n = 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('fizz');
  });

  it('Should return 4 for n = 4', () => {
    const result = fizzBuzz(4);
    expect(result).toBe(4);
  });

  it('Should return "buzz" for n = 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('buzz');
  });

  it('Should return "fizzbuzz" for n = 15', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('fizzbuzz');
  });

  it('Should return "fizzbuzz" for n = 30', () => {
    const result = fizzBuzz(30);
    expect(result).toBe('fizzbuzz');
  });

  it('Should return "buzz" for n = 35', () => {
    const result = fizzBuzz(35);
    expect(result).toBe('buzz');
  });
});

describe('Error handling', () => {
  it('Should throw an error for n = -1', () => {
    expect(() => {
      fizzBuzz(-1);
    }).toThrow('Number must be greater than 0');
  });
});