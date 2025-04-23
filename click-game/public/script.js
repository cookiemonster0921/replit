var socket = io({autoConnect: false})
var title = document.getElementById('title')
var board = document.getElementById('board')
var form = document.getElementById('form')
var room = document.getElementById('room')
var username = document.getElementById('name')
var start = document.getElementById('start')
var score = document.getElementById('score')
title.textContent = 'tfdhgfdvg'

/*for (var i = 0; i < 15; i++) {
  //var div = document.createElement('div')
  var f = document.createElement('div')
  f.textContent = 'gfjd'
  f.style.position = 'absolute'
  f.style.display = 'inline-block'
  f.style.top = `${Math.random()*1000 + 1}px`
  f.style.left = `${Math.random()*1000 + 1}px`
  //div.appendChild(f)
  board.appendChild(f)
}*/
form.addEventListener('submit', (e) => {
  e.preventDefault()
  socket.connect()
  socket.emit('join', room.value, username.value)
  form.classList.add('invisible')
})
start.addEventListener('click', (e) => {
  e.preventDefault()
  socket.emit('start')
})
socket.on('show people', (name) => {
  score.textContent = null
  for (var x of name) {
    var d = document.createElement('li')
    d.textContent = x
    score.appendChild(d)
  }
})
socket.on('begin', (data) => {
  title.style.color = 'blue'
  score.textContent = null
  for (var i in data) {
    var d = document.createElement('li')
    d.textContent = `${i}: ${data[i]}`
    score.appendChild(d)
  }
  for (var i = 0; i < 20; i++) {
  //var div = document.createElement('div')
     
    setTimeout(() => {
       var f = document.createElement('div')
  f.textContent = 'gfjd'
  f.style.position = 'absolute'
  f.style.display = 'inline-block'
  f.style.top = `${Math.random()*1000 + 1}px`
  f.style.left = `${Math.random()*1000 + 1}px`
      board.appendChild(f)
      f.addEventListener('click', (e) => {
        e.preventDefault()
        f.remove()
        socket.emit('addpoint')
      })
    }, Math.random()*10000+1000)
  //div.appendChild(f)
  }
})