import express from 'express';

const port = 3000;
const server = express();

server.use(express.json());

server.get('/ping', (req, res) => {
  res.send('pong');
});

server.use('/public', express.static('../public'));

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
