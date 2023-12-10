import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const { USERNAME, PASSWORD } = process.env;


// Generar un token JWT
export function generateToken(username) {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function authenticateUser(req, res) {
    const { username, password } = req.body;
  
    console.log('Input Username:', username);
    console.log('Input Password:', password);
    console.log('Stored Username:', USERNAME);
    console.log('Stored Password:', PASSWORD);

  // Verificar credenciales usando bcrypt.compareSync
  if (username === USERNAME && bcrypt.compareSync(password, PASSWORD)) {
    const token = generateToken(username);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
