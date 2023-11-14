import express from 'express';

const server = express();
const userRouter = express.Router();

/* Middleware */
function printDateMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
}

/* Controller */
function pingController(req, res) {
  console.log('pong');
  res.send('pong');
}

function getUser(req, res) {
  res.send({ name: 'Jose Antonio' });
}

function postUser(req, res, next) {
  try {
    throw new Error('fasho');
  } catch (err) {
    next(err);
  }
}
server.use(('[pu]*'), printDateMiddleware);
server.use(userRouter);

/* Route + Controller */
server.get('/ping', printDateMiddleware, pingController);
userRouter.get('/user', getUser);
userRouter.post('/user', postUser);

server.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).send(status === 500 ? 'Server Error' : message);
});

server.listen(3000, () => {
  console.log('Server is ready');
});
