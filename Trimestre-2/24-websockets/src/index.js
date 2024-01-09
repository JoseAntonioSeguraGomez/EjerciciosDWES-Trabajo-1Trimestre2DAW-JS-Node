import app from './app.js';
import config from './config.js';
import { Server } from 'socket.io';

const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const io = new Server(server);

io.on('connection', (socket) => {
    socket.emit('hello', 'holita UwU');
    io.emit('all', 'todos 7w7');
    
    console.log('A user has connected');
    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
});