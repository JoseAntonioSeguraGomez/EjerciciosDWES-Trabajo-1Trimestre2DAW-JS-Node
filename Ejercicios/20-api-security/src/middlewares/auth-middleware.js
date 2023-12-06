import { HttpStatusError } from "common-errors";
import jwt from "jsonwebtoken";
import config from "../config.js";
import logger  from "../utils/logger.js";

export function checkToken(req, res, next){
  console.log(req.headers.authorization);

  const {authorization} = req.headers;

  if(!authorization) throw HttpStatusError(401, 'No token proviced');
  
  const[_bearer, token] = authorization.split(' ');
  try{
    jwt.verify(authorization, config.app.secretKey);
  }catch(err){
    logger.error(err.message);
    throw HttpStatusError(401, 'No token proviced');

  }
  
  next();
}