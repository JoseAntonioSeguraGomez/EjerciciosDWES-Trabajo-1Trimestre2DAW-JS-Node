import fs from 'fs';
import querystring from 'querystring';
import url from 'url';
import generateFizzBuzzSequence from '../fizzbuzz.js';

export function pingController(req, res) {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Request accepted</h1>');
}

export function jsonController(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const resObject = {
    message: 'hello world!',
  };
  return res.end(JSON.stringify(resObject));
}

export function notFoundController(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>NotFound</h1>');
}

// Ejercicio 4
/*
export const page = (req, res) => {
  const pageContent = `
    <!DOCTYPE html>
    <head>
      <title>Página HTML</title>
    </head>
    <body>
      <h1>Hola soy una página</h1>
    </body>
    </html>
  `;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(pageContent);
};

export const error = (req, res) => {
  const errorContent = `
    <!DOCTYPE html>
    <head>
      <title>Error 404</title>
    </head>
    <body>
      <h1>Error 404</h1>
    </body>
    </html>
  `;
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end(errorContent);
};
*/
// Ejercicio 5
export function page(req, res) {
  const fichero = fs.readFileSync('./public/page.html');
  res.setHeader('Content-Type', 'text/html');
  return res.end(fichero);
}

export function error(req, res) {
  const fichero = fs.readFileSync('./public/error.html');
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end(fichero);
}

export const hello = (req, res) => {
  const fullUrl = req.url;

  const queryParams = fullUrl.includes('?')
    ? Object.fromEntries(fullUrl.split('?')[1].split('&').map((item) => item.split('=')))
    : {};

  const { name } = queryParams;

  const message = `Hola, ${name || 'desconocido'}!`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(`<p>${message}</p>`);
};

export function fizzbuzz(req, res) {
  const queryParams = querystring.parse(url.parse(req.url).query);
  const number = parseInt(queryParams.number, 10);

  if (isNaN(number) || number <= 0) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Bad Request: Please provide a valid positive number.');
  }

  const sequence = generateFizzBuzzSequence(number);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify({ sequence }));
}
