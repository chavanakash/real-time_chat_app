
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import cors package



const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins for simplicity, restrict as needed
        methods: ["GET", "POST"]
    }
});

// Use cors middleware
app.use(cors());
app.use(express.static('public'));
const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});

