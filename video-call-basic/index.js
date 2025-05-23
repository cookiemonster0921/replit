const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app)
const io = new Server(server);

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    
  })
})

server.listen(3000, () => {
  console.log('server started');
});
