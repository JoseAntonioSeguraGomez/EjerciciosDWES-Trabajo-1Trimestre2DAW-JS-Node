import http from 'http';

import { routes, defaultRoute } from './server/routes.js';

const port = 3000;

const server = http.createServer((request, response) => {
  const route = routes[request.url.slice(1)] || defaultRoute;
  route(request, response);
});

server.listen(port, () => {
  console.log(`Server is read in http://localhost:${port}`);
});
