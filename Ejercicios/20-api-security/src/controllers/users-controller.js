import logger from "../utils/logger.js"
import * as userService from "../service/users.js";
import bcrypt from 'bcrypt';
import {addUser} from '../service/users.js'

export function getUsers(req, res) {
  res.send(users);
}

export function getUser(req, res) {
  logger.info(JSON.stringify(req.params, null, 2));
  const { id } = req.params;
  const user = users.find(u => u.id === id);
  if(user){
    return res.send(user);
  }
  return res.status(404).send({ message: 'User not found'});
}

export function postUser(req, res, next){
  const { password, ...body } = req.body;
  const users = userService.getUsers();
  if(!body.name || !body.name.trim()) return res.status(400).send({message: 'Error...'});
  const id= body.id || (parseInt(users[users.lenght-1].id)+1).toString();

  if(users.some(u => u.id === id)) return res.status(409).send({message: 'Error...'});

  const hash = bcrypt.hashSync(password, 10);

  const toCreatedUser = { id, ...body, password: hash};
  const createdUser = userService.addUser(toCreatedUser);
  return res.status(201).send(createdUser);
}

export function updateUser(req, res, next) {
  const { id } = req.params;
  const user = users.find(u => u.id === id)
  if(!user) return res.status(404).send({message: 'User not found...'});

  Object.entries(req.body).forEach(([key, value]) => {
    user[key] = value;
  })

  return res.send(user);
}

export function deleteUser(req, res) {
  const { id } = req.params;
  const usersIndex = users.findIndex(u => u.id === id)
  if(usersIndex < 0) return res.status(404).send({message: 'User already exits...'});

  const [user] = users.splice(usersIndex, 1);
  res.send(user);
}