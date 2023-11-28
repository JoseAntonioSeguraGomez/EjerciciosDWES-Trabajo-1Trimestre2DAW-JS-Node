import logger from "../utils/logger.js"

const users = [
  { id:'1', name: 'Jose', age:19, genre:'male'},
  { id:'2', name: 'Pepe', age:60, genre:'male'},
  { id:'3', name: 'Paula', age:49, genre:'female'},
];

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
  const { body } = req;
  if(!body.name || !body.name.trim()) return res.status(400).send({message: '...'});
  const id= body.id || (parseInt(users[users.lenght-1].id)+1).toString();

  if(users.some(u => u.id === id)) return res.status(409).send({message: '...'});
  const createdUser = { id, ...body}
  users.push(createdUser);
  return res.status(201).send(createdUser);
}

export function updateUser(req, res, next) {
  const { id } = req.params;
  const user = users.find(u => u.id === id)
  if(!user) return res.status(404).send({message: '...'});

  Object.entries(req.body).forEach(([Key, value]) => {
    user[key] = value;
  })


  return res.send(user);
}

export function deleteUser(req, res) {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === id)
  if(!userIndex < 0) return res.status(404).send({message: '...'});

  const [user] = users.splice(usersIndex, 1);

  res.send(user);
}