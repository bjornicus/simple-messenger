const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {  
    cors: {    
        origin: "http://localhost:3000",    
        methods: ["GET", "POST"]  
    }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message", (msg) => { console.log('message: ' + msg);  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});