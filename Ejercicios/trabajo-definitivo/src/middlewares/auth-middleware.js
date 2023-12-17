import jwt from 'jsonwebtoken';
import { HttpStatusError } from 'common-errors';
import logger from '../utils/logger.js';
import config from '../config.js'


export function authenticateJWT(req, res, next) {
  console.log(req.headers.authorization);
  console.log(config.app.secretKey);

  const {authorization} = req.headers;

  if (!authorization) throw HttpStatusError(401, 'No token proviced');

  const [_Bearer, token] = authorization.split(' ');

  try {
    jwt.verify(token, config.app.secretKey);
    console.log('Token verification successful');
  } catch (err) {
    logger.error(err.message);
    throw HttpStatusError(401, 'Invalid Token');
  }
  next();
}