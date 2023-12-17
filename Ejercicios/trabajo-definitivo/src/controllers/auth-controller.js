import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { findUser } from '../services/users.js';
import config from '../config.js'

dotenv.config();

export function authenticateUser(req, res) {
  const { username, password } = req.body;

  const user = findUser(username);

  console.log('Input Username:', username, 'Stored Username:', user.name);
  console.log('Input Password:', password, 'Stored Password:', user.password);
  console.log('Secret-key', config.app.secretKey);

  try {
      if (username === user.name && bcrypt.compareSync(password, user.password)) {
        const userInfo = { id: user.id, user: user.name };
        const jwtConfig = { expiresIn: '1h'};
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
