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
  const myURL = new URL(`http://localhost:3000${req.url}`);
  const { searchParams } = myURL;
  const name = searchParams.get('name');

  if (name) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Hello ${name}!</h1>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Parameter "name" not found</h1>');
  }
};
