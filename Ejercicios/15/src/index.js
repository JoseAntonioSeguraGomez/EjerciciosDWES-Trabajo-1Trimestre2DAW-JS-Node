import express from 'express';
import * as controller from './controllers.js';

const port = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true}));


server.get('/headers', controller.headersController);
server.get('/query', controller.queryController);
//server.get('/params/:name', controller.paramsController);
//server.get('/params/:name/greetings', controller.greetingsController);
/*server.get('/body', controller.bodyController);*/

// Ejercicios
server.get('/header', controller.headerController);
server.get('/params/:name', controller.nameController);
server.get('/query', controller.queryController);
server.get('/body', controller.bodyController);

// Ejercicios ultimos
const animalsRouter = express.Router();

animalsRouter.get('/dog', (req, res) => {
  res.json({ grow: 'guau guau' });
});

animalsRouter.get('/cat', (req, res) => {
  res.json({ grow: 'miau' });
});

animalsRouter.get('/bird', (req, res) => {
  res.json({ grow: 'pio pio' });
});

server.use('/animals', animalsRouter);
server.use(controller.notFoundController);

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
