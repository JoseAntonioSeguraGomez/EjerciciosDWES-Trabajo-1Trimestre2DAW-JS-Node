import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { findUser } from '../services/users.js';
import config from '../config.js'

dotenv.config();

// Verifica el login
export function authenticateUser(req, res) {
  //Recoge el nombre y contraseña proporcionado por el usuario
  const { username, password } = req.body;

  // Existe el usuario?
  const user = findUser(username);

  console.log('Input Username:', username, 'Stored Username:', user.name);
  console.log('Input Password:', password, 'Stored Password:', user.password);
  console.log('Secret-key', config.app.secretKey);

  try {
    // Verifica si existe
      if (username === user.name && bcrypt.compareSync(password, user.password)) {
        // datos del token
        const userInfo = { id: user.id, user: user.name };
        // duración de vida del token
        const jwtConfig = { expiresIn: '1h'};
        // crea el token
        const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
        return res.status(200).json({ token });

      } else {
          res.status(401).json({ message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error('Error during authentication:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
}
