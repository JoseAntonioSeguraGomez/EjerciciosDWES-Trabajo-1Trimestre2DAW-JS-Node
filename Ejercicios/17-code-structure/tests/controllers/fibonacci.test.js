// fibonacci-controller.test.js
import { fibonacciController } from '../../src/controllers/fibonacci-controller.js';

describe('Fibonacci Controller', () => {
  it('should return the correct result for a valid input', () => {
    const req = { query: { n: 10 } };
    const res = { json: jest.fn() };

    fibonacciController(req, res);

    expect(res.json).toHaveBeenCalledWith({ result: 55 });
  });

  it('should handle invalid input gracefully', () => {
    const req = { query: { n: 'invalid' } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    fibonacciController(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ error: "Please provide a valid positive integer for 'n' in the query parameters." });
  });
});