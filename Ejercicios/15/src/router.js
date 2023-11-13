import express from 'express';

const server = express();
/*const pingRouter = express.Router();
const bookRouter = express.Router();

server.use('/ping', pingRouter);
server.use('/book', bookRouter);

pingRouter.use('/', (req, res) => {
  res.sebd(req.method);

});

bookRouter.get('/', (req, res) => res.send('Get a random book'));
bookRouter.post('/', (req, res) => res.send('add book'));
bookRouter.put('/', (req, res) => res.send('update book'));
bookRouter.delete('/', (req, res) => res.send('delete book'));


bookRouter.get('/', (req, res) => {
  res.sebd(req.method);

});*/

server.listen(4000, () => {
  console.log(`Example app listening`)
})
