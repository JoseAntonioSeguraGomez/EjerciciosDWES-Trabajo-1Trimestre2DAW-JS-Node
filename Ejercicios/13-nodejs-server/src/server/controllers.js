import fs from 'fs';
import url from 'url';

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
  const urlWithoutSlash = req.url.slice(1); // Elimina el primer carácter '/'
  const urlParams = urlWithoutSlash.split('?');

  if (urlParams[0] === 'hello' && urlParams.length > 1) {
    const queryParams = urlParams[1].split('=');
    if (queryParams[0] === 'name') {
      const name = queryParams[1];

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>Hello ${name}!</h1>`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Not Found</h1>');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  }
};
