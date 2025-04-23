var span = document.getElementById('span');
var button = document.getElementById('button');
var random = Math.floor((Math.random() * 255) + 1);
var first = document.getElementById('1');
var second = document.getElementById('2');
var third = document.getElementById('3');
var fourth = document.getElementById('4');
var result = document.getElementById('result');
function color() { 
  result.textContent = null;
  var random = Math.floor((Math.random() * 255) + 1);
  var rand1 = Math.floor((Math.random() * 255) + 1);
  var rand2 = Math.floor((Math.random() * 255) + 1);
  span.textContent = 'color'
  var colour = `rgb(${random}, ${rand1}, ${rand2})`;
  var r = Math.floor((Math.random() * 255) + 1);
  var ra = Math.floor((Math.random() * 255) + 1);
  var ran = Math.floor((Math.random() * 255) + 1);
  var decide = Math.floor((Math.random() * 4) + 1);
  span.textContent = colour
  //span.style.color = colour
  button.textContent = 'Next';  
  if (decide == 1) { 
    first.style.background = colour;
    second.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    third.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    fourth.style.background = `rgb(${r}, ${ra}, ${ran})`
  }
  if (decide == 2) {
    second.style.background = colour;
    first.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    third.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    fourth.style.background = `rgb(${r}, ${ra}, ${ran})`
  }
  if (decide == 3) {
    third.style.background = colour;
    second.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    first.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1); 
    var ran = Math.floor((Math.random() * 255) + 1);
    fourth.style.background = `rgb(${r}, ${ra}, ${ran})`
  }
  if (decide == 4) {
    fourth.style.background = colour;
    second.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    third.style.background = `rgb(${r}, ${ra}, ${ran})`
    var r = Math.floor((Math.random() * 255) + 1);
    var ra = Math.floor((Math.random() * 255) + 1);
    var ran = Math.floor((Math.random() * 255) + 1);
    first.style.background = `rgb(${r}, ${ra}, ${ran})`
  }
  function correct(event) {
    if (`rgb(${random}, ${rand1}, ${rand2})` == event.target.style.background) {
      result.textContent = 'Correct!' 
    }
    else {
      result.textContent = 'Wrong'; 
    } 
  }
  first.onclick = correct;
  second.onclick = correct;
  third.onclick = correct;
  fourth.onclick = correct;
} 

button.onclick = color; 
