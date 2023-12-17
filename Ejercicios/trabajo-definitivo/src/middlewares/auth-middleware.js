import jwt from 'jsonwebtoken';
import { HttpStatusError } from 'common-errors';
import logger from '../utils/logger.js';
import config from '../config.js'

// Verifica el token
export function authenticateJWT(req, res, next) {
  // Imprimir el token y el secretkey
  console.log(req.headers.authorization);
  console.log(config.app.secretKey);

  // Separar token
  const {authorization} = req.headers;

  // Verficar que exista
  if (!authorization) throw HttpStatusError(401, 'No token proviced');

  // Separa el token
  const [_Bearer, token] = authorization.split(' ');

  // Verifica que el token tenga la misma firma que el SecretKey
  try {
    jwt.verify(token, config.app.secretKey);
    console.log('Token verification successful');
  } catch (err) {
    logger.error(err.message);
    throw HttpStatusError(401, 'Invalid Token');
  }
  next();
}