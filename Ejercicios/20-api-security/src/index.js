import app from './app.js';
import logger from './utils/index.js'

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
  logger.info('Server started successfully');
});

//import bcrypt from 'bcrypt';
//console.log(bcrypt.hashSync('Jose'))