const express = require('express');
const http = require('http')
const { Server } = require('socket.io')
const bodyParser = require('body-parser')
const app = express();
const server = http.createServer(app)
const io = new Server(server)

app.use('/style', express.static(__dirname + '/style'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
var list = []
io.on('connection', (socket) => {
  console.log('connected')
  socket.on('disconnect', () => {
    console.log('disconnect')
  })
  socket.on('user in', (data) => {
    list.push(data)
    console.log(data)
    console.log(list)
    io.emit('video', list)
  })
  socket.on('on', () => {
    //io.emit('on')
    socket.broadcast.emit('on')
  })
}) 

server.listen(3000, () => {
  console.log('server started');
});
