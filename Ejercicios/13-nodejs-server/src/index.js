import http from 'http';
import url from 'url';

import { routes, defaultRoute } from './server/routes.js';

const port = 3000;

const server = http.createServer((request, response) => {
  // Llevo dos semanas con fallos en el query asqueroso, era por no añadir esta asquerosa linea de mier
  const urlParts = url.parse(request.url);

  const route = routes[urlParts.pathname.slice(1)] || defaultRoute;
  route(request, response);
});

server.listen(port, () => {
  console.log(`Server is read in http://localhost:${port}`);
});
