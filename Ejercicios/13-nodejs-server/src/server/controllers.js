import fs from 'fs';
import querystring from 'querystring';

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
  // Obtenemos la URL completa, incluyendo la query string
  const fullUrl = req.url;

  // Utilizamos slice para obtener la query string (si existe)
  const queryString = fullUrl.includes('?') ? fullUrl.slice(fullUrl.indexOf('?') + 1) : '';

  // Parseamos la query string para obtener los parámetros
  const params = querystring.parse(queryString);

  // Obtenemos el valor del parámetro "name" o establecemos uno por defecto
  const name = params.name || 'desconocido';

  // Creamos el mensaje personalizado
  const message = `Hola, ${name}!`;

  // Configuramos la respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Enviamos la respuesta
  return res.end(`<h1>${message}</h1>`);
};

/*
export const hello = (req, res) => {
  // Obtenemos la URL completa, incluyendo la query string
  const fullUrl = req.url;

  // Dividimos la URL en base al signo de interrogación
  const queryParts = fullUrl.split('?');

  // Verificamos si hay una cadena de consulta
  if (queryParts.length < 2) {
    return res.status(400).end('Bad Request: Missing query parameters');
  }

  // Obtenemos la cadena de consulta y la dividimos en pares clave-valor
  const queryString = queryParts[1];
  const queryParams = new URLSearchParams(queryString);

  // Creamos el mensaje personalizado
  const name = queryParams.get('name');
  const message = name ? `Hola, ${name}!` : 'Hola!';

  // Configuramos la respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Enviamos la respuesta
  return res.end(`<h1>${message}</h1>`);
}; */
