export function fibonacciController(req, res) {
    const n = parseInt(req.query.n);
    const result = calculateFibonacci(n);
    res.json({ result });
  }
  
  function calculateFibonacci(n) {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }