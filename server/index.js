const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { json } = require('express');

const io = new Server(server, {  
    // for local dev with client running on 3000
    cors: {
        origin: "http://localhost:3000",    
        methods: ["GET", "POST"]  
    }
});

users = []

io.on('connection', (socket) => {
  const user = socket.handshake.headers.user;
  console.log(`${user} connected`);
  socket.on("message", (msg) => { 
      console.log('message: ' + JSON.stringify(msg));  
      io.emit('message', msg);
    });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});