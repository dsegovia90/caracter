setInterval(function(){
  let caracterLogo = document.getElementById('caracter-logo');
  let style = caracterLogo.style.borderRight === '1px solid white' ? '1px solid black' : '1px solid white';
  caracterLogo.style.borderRight = style;
}, 1000);

window.onresize = function(){
  document.getElementById('main-container').style.height = window.innerHeight;
}
window.onresize();