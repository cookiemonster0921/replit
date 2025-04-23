var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var mm = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function time() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var day = date.getDate();
  var wday = date.getDay();
  var year = date.getFullYear();
  var second = date.getSeconds();
  var month = date.getMonth();
  var milli = date.getMilliseconds();
  var a = 'am';
  if (hour == 0) {
    hour = 12; 
  }
  else if (hour > 12) {
    hour -= 12;
    a = 'pm';
  }
  if (second < 10) {
    second = '0'+second 
  }
  month = mm[month];
  wday = week[wday-1];
  var h = document.getElementById('hour');
  var m = document.getElementById('min');
  var s = document.getElementById('sec');
  var am = document.getElementById('am');
  var d = document.getElementById('date');
  var days = document.getElementById('day');
  var mo = document.getElementById('month');
  var y = document.getElementById('year');
  var mmmm = document.getElementById('milli');
  mmmm.textContent = milli;
  s.textContent = second;
  s.innerText = second;
  m.textContent = minute;
  m.innerText = minute;
  h.textContent = hour;
  h.innerText = hour;
  am.textContent = a;
  am.innerText = a;
  d.textContent = wday;
  d.innerText = wday;
  days.textContent = day;
  days.innerText = day;
  mo.textContent = month;
  mo.innerText = month;
  y.textContent = year;
  y.innerText = year;
  setInterval(time, 1)
}
time()
  
  