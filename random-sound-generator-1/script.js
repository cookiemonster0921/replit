var play = document.getElementById('play')
play.addEventListener('click', () => {
  navigator.requestMIDIAccess().then(access => {
    var context = new AudioContext()
    var sound = context.createOscillator()
    /*sound.frequency.setTargetAtTime(Math.pow(2, (60 - 69) / 12) * 440, context.currentTime, 0);
    sound.type = 'square'
    sound.connect(context.destination);
    sound.start(0);*/
    //console.log(context.destination)
    //console.log(context.currentTime)
    sound.type = 'sawtooth'
    sound.connect(context.destination)
    var length = 2
    var eps = 0.01
    sound.start(0)
    var time = context.currentTime + eps
    for (var i = 0; i < 120; i++) {
      var random = Math.floor(Math.random() * 80 + 60)
      var rand = Math.floor(Math.random() * 8 + 4)
      const freq = Math.pow(2, (random - 69) / 12) * 440;
      console.log(time);
      sound.frequency.setTargetAtTime(0, time - eps, 0.001);
      sound.frequency.setTargetAtTime(freq, time, 0.001);
      time += length / rand
    }
    sound.frequency.setTargetAtTime(0, time - eps, 0.001);
  })
})