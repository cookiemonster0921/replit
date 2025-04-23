var html = document.getElementById('html');
var css = document.getElementById('css');
var js = document.getElementById('js');
var code = document.getElementById('code').contentWindow.document;
var title = document.querySelector('h1')
var star = document.getElementById('start');
function run() {
  code.open();
  code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
  code.close();
};
function change() {
  title.style.color = 'blue';
  if (js.value.substr(-1) == '{') {
    
  }
}
star.onclick = run;
js.oninput = change;
