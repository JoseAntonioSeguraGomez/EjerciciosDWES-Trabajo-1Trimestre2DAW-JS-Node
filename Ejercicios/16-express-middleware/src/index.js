import express from 'express';
import winston from 'winston';
import morgan from 'morgan';

const server = express();

const {
  createLogger,
  transports: { Console },
  format: {
    combine, timestamp, colorize, printf,
  },
} = winston;

const logger = createLogger({
  transports: [
    new Console({
      format: combine(
        timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        colorize(),
        printf((info) => `[${[info.timestamp]}] (${info.level}) ${info.message}`),
      ),
    }),
  ],
});

server.use(morgan('combined', {
  stream: {
    write(message) {
      logger.info(message);
    },
  },
}));

/* Route + Controller */
server.get('/ping', (req, res) => {
  console.log('pong');
  res.send('pong');
});

server.listen(3000, () => {
  logger.log({ level: 'info', message: 'Server is ready' });
  logger.info('Server is ready');
  logger.warn('Server is ready');
});
