const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const socketIo = socket(httpServer);

socketIo.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    socketIo.emit('message', { name, message });
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
