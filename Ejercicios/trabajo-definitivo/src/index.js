import app from './app.js';
import logger from './utils/index.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is listening on port 3000");
  logger.info('Server started successfully');
});
