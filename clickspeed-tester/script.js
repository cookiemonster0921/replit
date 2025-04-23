var start = document.getElementById('begin');
var click = document.getElementById('start');
var num = document.getElementById('clicks');
var timer = document.getElementById('timer');
var end = document.getElementById('ko');
var count = 0;
var time = 10;
var int;
var speed;
function begin() {
  time = 10;
  start.classList.add('invisible');
  count = 0;
  click.disabled = false;
  int = setInterval( function() {
     time -= 1;
     timer.textContent = `${time} seconds left`;
     if (time == 0) { 
      click.disabled = true; 
      speed = count/10;
      end.textContent = `${Math.round(speed)} clicks per second`;
      start.classList.remove('invisible');
      clearInterval(int);
     }
   }, 1000); 
}  
function player() {
  count += 1;  
  num.textContent = `${count} clicks clicked`;
} 

start.onclick = begin; 
click.onclick = player;