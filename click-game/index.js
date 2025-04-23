const http = require('http')
const express = require('express')
const { Server } = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connect', (socket) => {
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
  socket.on('join', (room, name) => {
    socket.join(room)
    socket.username = name;
    socket.score = 0;
    socket.room = room;
    io.in(socket.room).fetchSockets().then(value => {
      var s = []
      for (var i of value) {
        s.push(i.username)
      }
      io.to(socket.room).emit('show people', s)
    })
  })
  socket.on('start', () => {
    io.in(socket.room).fetchSockets().then(value => {
      var send = {}
      for (var i of value) {
        send[i.username] = i.score
      }
      io.to(socket.room).emit('begin', send)
    })
  })
  socket.on('addpoint', () => {
    
  })
})

server.listen(3000, () => {
  console.log('start')
})