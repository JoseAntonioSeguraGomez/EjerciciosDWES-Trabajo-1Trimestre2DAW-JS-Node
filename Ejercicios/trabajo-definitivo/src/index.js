import app from './app.js';
import logger from './utils/index.js';
import config from './config.js';

const port = config.app.port || 3000;

app.listen(port, () => {
  console.log("Server is listening on port 3000");
  logger.info('Server started successfully');
});
