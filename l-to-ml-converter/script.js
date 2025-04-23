window.onload = function() {
    var litres = document.getElementById("l");
    var ml = document.getElementById("ml");
    litres.oninput = function() {
        ml.value = litres.value * 1000;
    }
    ml.oninput = function() {
        litres.value = ml.value /1000;
    }
    function a() {
      var select = document.getElementById('first');
      var i = document.getElementById('ii');
      if (select == 'cm') {
          i.textContent = 'grf';
      }
    }
}