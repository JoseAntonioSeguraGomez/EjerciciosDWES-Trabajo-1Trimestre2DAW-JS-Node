import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { USER: secretUser, PASSWORD: secretPassword, SECRET_KEY: secretKey } = process.env;

export function authenticateUser(req, res) {

  const { username, password } = req.body;

  console.log('Input Username:', username, 'Stored Username:', secretUser);
  console.log('Input Password:', password, 'Stored Password:', secretPassword);
  console.log('Secret-key', secretKey);

  try {
      if (username === secretUser && bcrypt.compareSync(password, secretPassword)) {
        const userInfo = { user: username };
        const jwtConfig = { expiresIn: '1h'};
        const token = jwt.sign(userInfo, secretKey, jwtConfig);
        return res.send({token});
      } else {
          res.status(401).json({ message: 'Invalid credentials' });
      }
  } catch (error) {
      console.error('Error during authentication:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
}
