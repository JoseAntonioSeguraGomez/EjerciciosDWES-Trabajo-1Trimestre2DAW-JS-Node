import app from './app.js';
import config from './config.js';
import { Server } from 'socket.io';

const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

const io = new Server(server);

io.on('connection', (socket) => {

    socket.emit('single', 'toy solo UwU');
    io.emit('all', 'Conectado');
    socket.on('echo', (data) =>{
        console.log('echo');
        io.emit('all', data);
    })

    socket.on('hello', () => console.log('hello'));

    console.log(`A user has connected`);
    socket.on('disconnect', () => {
        console.log(`${socket.handshake.address} has disconnected`);
    });
});

setInterval(() => {
    io.emit('date', new Date());
}, 1000);