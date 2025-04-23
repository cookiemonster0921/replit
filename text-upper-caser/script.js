window.onload = function(){
  var i = document.getElementById('i');
  var o = document.getElementById('o');
  let span = document.querySelector('span');
  var jk = document.getElementById('lower');
  var r = document.getElementById('u');
  function clickAction() {
    o.classList.add('l');
    //event.target.classList.add('l');
  }
  function as() {
    r.classList.add('a'); 
  }
  i.oninput = function() {
    o.textContent = i.value;
    clickAction();
  }
  jk.oninput = function() {
    r.textContent = jk.value;
    as();
  }
}