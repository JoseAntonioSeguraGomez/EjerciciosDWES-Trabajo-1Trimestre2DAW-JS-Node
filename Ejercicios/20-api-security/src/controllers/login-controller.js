import bcrypt from 'bcrypt';
import { HttpStatusError } from 'common-errors'
import { findUser } from "../service/users.js";
import jwt from 'jsonwebtoken';
import config from '../config.js'

export function login(req, res){
    const { username, password } = req.body;

    const user = findUser(username);

    if(user){
        console.log(password, user.password);
        if(bcrypt.compareSync(password, user.password)){
            const userInfo = { id: user.id, name: user.name};
            const config = { expiresIn: 30};
            const token = jwt.sign(userInfo, config.app.secretKey);
            return res.send({token});
        };
    }

    throw new HttpStatusError(401, 'Invalid credentials');

    //const error = new Error('Invalid credentials');
    //error.status = 401;
    //throw error;
}

export function signin(req, res){
    
}