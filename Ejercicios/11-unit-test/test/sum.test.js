import {sum} from '../src/sum.js';

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1,1);
  expect(result).toBe(2);
});