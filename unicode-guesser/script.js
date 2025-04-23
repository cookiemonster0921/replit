var span = document.getElementById('span');
var button = document.getElementById('button');
//var random = Math.floor((Math.random() * 255) + 1);
var first = document.getElementById('1');
var second = document.getElementById('2');
var third = document.getElementById('3');
var fourth = document.getElementById('4');

function color() { 
  var random = Math.floor((Math.random() * 130000-120000) + 120000);
  //var rand1 = Math.floor((Math.random() * 255) + 1);
  //var rand2 = Math.floor((Math.random() * 255) + 1);
  span.textContent = 'color'
  //var colour = `rgb(${random}, ${rand1}, ${rand2})`;
  //var r = Math.floor((Math.random() * 255) + 1);
  //var ra = Math.floor((Math.random() * 255) + 1);
  //var ran = Math.floor((Math.random() * 255) + 1);
  var decide = Math.floor((Math.random() * 4) + 1);
  span.textContent = random
  //span.style.color = colour
  button.textContent = 'Next';  
  if (decide == 1) { 
    first.textContent = String.fromCodePoint(random);
    var r = Math.floor((Math.random() * 130000-120000) + 120000);
    second.textContent = String.fromCodePoint(r);
    var ra = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ran = Math.floor((Math.random() * 255) + 1);
    third.textContent = String.fromCodePoint(ra);
    var ram = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ra = Math.floor((Math.random() * 255) + 1);
    //var ran = Math.floor((Math.random() * 255) + 1);
    fourth.textContent = String.fromCodePoint(ram);
  }
  if (decide == 2) {
    second.textContent = String.fromCodePoint(random);
    var r = Math.floor((Math.random() * 130000-120000) + 120000);
    first.textContent = String.fromCodePoint(r);
    var ra = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ran = Math.floor((Math.random() * 255) + 1);
    third.textContent = String.fromCodePoint(ra);
    var ram = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ra = Math.floor((Math.random() * 255) + 1);
    //var ran = Math.floor((Math.random() * 255) + 1);
    fourth.textContent = String.fromCodePoint(ram);
  }
  if (decide == 3) {
    third.textContent = String.fromCodePoint(random);
    var r = Math.floor((Math.random() * 130000-120000) + 120000);
    second.textContent = String.fromCodePoint(r);
    var ra = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ran = Math.floor((Math.random() * 255) + 1);
    first.textContent = String.fromCodePoint(ra);
    var ram = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ra = Math.floor((Math.random() * 255) + 1);
    //var ran = Math.floor((Math.random() * 255) + 1);
    fourth.textContent = String.fromCodePoint(ram);
  }
  if (decide == 4) {
    fourth.textContent = String.fromCodePoint(random);
    var r = Math.floor((Math.random() * 130000-120000) + 120000);
    second.textContent = String.fromCodePoint(r);
    var ra = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ran = Math.floor((Math.random() * 255) + 1);
    third.textContent = String.fromCodePoint(ra);
    var ram = Math.floor((Math.random() * 130000-120000) + 120000);
    //var ra = Math.floor((Math.random() * 255) + 1);
    //var ran = Math.floor((Math.random() * 255) + 1);
    first.textContent = String.fromCodePoint(ram);
  }
  function correct(event) {
    if (String.fromCodePoint(random) == event.target.textContent) {
      span.textContent = 'Correct!' 
    }
    else {
      span.textContent = 'Wrong'; 
    }  
  }
  first.onclick = correct;
  second.onclick = correct;
  third.onclick = correct;
  fourth.onclick = correct;
} 

button.onclick = color; 
