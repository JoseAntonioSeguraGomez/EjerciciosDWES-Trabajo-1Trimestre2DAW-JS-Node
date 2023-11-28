// Prueba en clase
export function getUser(req, res) {
  res.send({ 'name': 'Jose' });
}

export function postUser(req, res, next){
  const { body } = req;
  if(!body.name || !body.name.trim()) return res.status(400).send({ message: 'Not found'});
  const id = body.id || body.id || (parseInt(users))
}

export function postUser(req, res, next) {
  try {
    throw new Error('Unexpected error');
  } catch (err) {
    next(err);
  }
}