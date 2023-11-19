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

// Ejercicio 1
const requestLogger = (req, res, next) => {
  const { statusCode } = res;

  if (statusCode >= 200 && statusCode < 300) {
    // 2XX
    logger.info(`[${new Date()}] ${req.method} ${req.originalUrl} - ${statusCode}`);
  } else if (statusCode >= 400 && statusCode < 500) {
    // 4XX
    logger.warn(`[${new Date()}] ${req.method} ${req.originalUrl} - ${statusCode}`);
  } else if (statusCode >= 500) {
    // 5XX
    logger.error(`[${new Date()}] ${req.method} ${req.originalUrl} - ${statusCode}`);
  }

  next();
};

// Ejercicio 2
const validateAccess = (req, res, next) => {
  const passwordHeader = req.headers.password;

  // Verificar si el password es "patata"
  if (passwordHeader && passwordHeader.toLowerCase() === 'patata') {
    // Acceso correcto
    next();
  } else {
    // Acceso incorrecto
    res.status(401).json({ error: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro \'password\' en la cabecera de la petición' });
  }
};

/* Route + Controller */
server.get('/ping', (req, res) => {
  console.log('pong');
  res.status(200).send('pong');
});

// Ejercicio 2
server.get('/zona-restringida', validateAccess, (req, res) => {
  res.status(200).send('Bienvenid@, disfrute del contenido.');
});

// Ejercicio 1
server.use(requestLogger);

server.listen(3000, () => {
  logger.log({ level: 'info', message: 'Server is ready' });
  logger.info('Server is ready');
  logger.warn('Server is ready');
});
