import jwt from 'jsonwebtoken';
import { HttpStatusError } from 'common-errors';
import logger from '../utils/logger.js';


export function authenticateJWT(req, res, next) {
  const { SECRET_KEY: secretKey } = process.env;

  console.log(req.headers.authorization);
  console.log(secretKey);

  const {authorization} = req.headers;

  if (!authorization) throw HttpStatusError(401, 'No token proviced');

  const [_Bearer, token] = authorization.split(' ');

  try {
    jwt.verify(token, secretKey);
    console.log('Token verification successful');
  } catch (err) {
    logger.error(err.message);
    throw HttpStatusError(401, 'Invalid Token');
  }
  next();
}