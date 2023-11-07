import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateFizzBuzzSequence } from './fizzbuzz.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const server = express();

server.use(express.json());

// Ejercicio 1/2/3

if (port === 4000) {
  server.get('/hello', (req, res) => {
    res.send('Hello World');
  });
}

// Ejemplo PING
server.get('/ping', (req, res) => {
  res.send('pong');
});

const publicPath = path.join(path.dirname(__dirname), 'public');

server.use('/public', express.static(publicPath));

// Ejercicio 4

/*
server.get('/page', (req, res) => {
  const pageContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>No es mi página</title>
      </head>
      <body>
        <h1>Holaaa</h1>
        <p>Bienvenido a la página de la nada, acabas de perder 5 segundos de tu vida en ver esto.</p>
      </body>
    </html>
  `;
  res.send(pageContent);
});

server.get('/error', (req, res) => {
  const errorPath = path.join(__dirname, '../public/error.html');
  res.status(404).sendFile(errorPath);
});
*/

// Ejercicio 5

server.get('/page', (req, res) => {
  const pagePath = path.join(publicPath, 'page.html');
  res.sendFile(pagePath);
});

server.get('/error', (req, res) => {
  const pagePath = path.join(publicPath, 'error.html');
  res.sendFile(pagePath);
});

// Ejercicio 6

server.get('/hello', (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`Hello ${name}!`);
  } else {
    res.status(400).send('Illo que te has equivocado, pon tu nombre que no te vamos a robar tus datos');
  }
});

// Ejercicio 7
server.get('/fizzbuzz', (req, res) => {
  const { number } = req.query;
  if (!number || isNaN(number)) {
    res.status(400).send('Solo pon un número ser de luz');
  } else {
    const result = generateFizzBuzzSequence(number);
    res.send(result);
  }
});

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});

