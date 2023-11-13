import express from 'express';

const port = 3000;
const server = express();

server.use(express.json());
server.use('/public', express.static);





// Ejercicio 1
server.get('/header', (req, res) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      code: 401,
      error: 'Unauthorized',
      message: 'Error: Set a token to login',
    });
  }

  console.log('Token:', token);
  res.send('Token received');
});

// 2. Parametro
server.get('/params/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hola ${name}`);
});

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
