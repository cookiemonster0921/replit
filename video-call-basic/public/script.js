var socket = io()
var peer = new Peer()
var grid = document.getElementById('grid')
var start = document.getElementById('start')
var recipient = document.getElementById('recipient')
var identify = document.getElementById('id')
var user = null;
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true/*, audio: true*/ }).then(function(stream) {
    var video = document.createElement('video')
    video.srcObject = stream;
    video.play();
    grid.appendChild(video)
    start.addEventListener('submit', (e) => {
      e.preventDefault() 
      var connection = peer.call(recipient.value, stream)
      start.classList.add('invisible')
      var vid = document.createElement('video')
      connection.on('stream', (video) => {
        vid.srcObject = video
        vid.play()
        grid.appendChild(vid)
      })
    })
    peer.on('call', (call) => {
      call.answer(stream)
      var person = document.createElement('video') 
      call.on('stream', uservideo => {
        person.srcObject = uservideo;
        person.play()
        grid.appendChild(person)
      })
    })
  });
}
else {
  alert('disabled for some reason')
}
peer.on('open', (id) => {
  //console.log(id)
  user = id
  identify.textContent = `${id}`
})