/* import http from 'http';

const port = 3000;

const server = http.createServer((request, response) => {
  const defaultRoute = () => {
    response.statusCode = 302;
    response.setHeader('Location', 'notFound');
    response.end('<h1>Redirect</h1>');
  };

  const route = {
    '/ping': () => {
      response.statusCode = 418;
      response.setHeader('Content-Type', 'text/html');
      response.end('<h1>Request accepted</h1>');
    },
    '/json': () => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      const responseObject = {
        message: 'Hello world',
      };
      return response.end(JSON.stringify(responseObject));
    },
    '/notFound': () => {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.end('<h1>Not Found</h1>');
    },
  }[`/${request.url.slice(1)}`] || defaultRoute;

  route();
});

server.listen(port, () => {
  console.log(`Server is readyin http://localhost:${port}`);
});
*/
