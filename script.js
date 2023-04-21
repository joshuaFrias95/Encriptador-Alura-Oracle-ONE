// Lógica de encriptación y desencriptación
const textArea = document.querySelector('textarea');
const btnC = document.getElementById('btn-c'); 
const btnE = document.getElementById('btn-e');
const btnD = document.getElementById('btn-d');
const result = document.getElementById('showResult');

let encripta = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufai'
}

let codigos= {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufai': 'u'
}; 


textArea.value= "";
textArea.focus();

function cambiarClase() {
  //oculta 
  document.getElementById('doll').classList.add('oculto');
  document.getElementById('titulo').classList.add('oculto');
  //Muestra
  document.getElementById('corazon').classList.remove('oculto');
  document.getElementById('titulo2').classList.remove('oculto');
  result.classList.remove('oculto');
  result.classList.add('ajuste');
  btnC.classList.remove('oculto');
  btnC.classList.add('show');
  
}

function mostrar(texto) {
  result.innerHTML = texto;
  
}

function encriptar() {
  let texto = textArea.value.toLocaleLowerCase();
  textArea.value = "";
  
  texto = texto.replace(/a|e|i|o|u/g, function(matched) {
    return encripta[matched]
  });
  
  cambiarClase();
  mostrar(texto);
}

function desencriptar() {
  let texto = textArea.value.toLocaleLowerCase();
  textArea.value = "";
  
  texto = texto.replace(/ai|enter|imes|ober|ufai/g, function(matched) {
    return codigos[matched]
  });
  
  cambiarClase();
  mostrar(texto);
}

function copiar() {
  navigator.clipboard.writeText(result.innerHTML);
}


btnE.onclick = encriptar;
btnD.onclick = desencriptar;
btnC.onclick = copiar;



//Typed.js

const typed = new Typed('.typed', {
  strings: ['<i class="crypted firstC">Encripta</i>',
            '<i class="crypted secondC">Desencripta</i>',
            '<i class="crypted thirdC">Repite</i>'
  ],
  stringElement: '#cadenas-texto',
  typeSpeed: 80,
  backSpeed: 75,
  shuffle: false,
  backDelay: 1000,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: '_'
});



// Fondo 
var c = document.getElementById('canv');
var $ = c.getContext('2d');
document.body.clientWidth;
var wh = 128;
var w2h = wh * wh;
c.width = c.height =  wh;
var img = $.createImageData(wh, wh);
var id = img.data;
var t = 0;
var inc = 1 / wh;
var arr = [];

for(var k = 0; k < w2h; ++k)
   arr[k] = Math.random() * 1.5 - 0.5;

function draw(){
  window.requestAnimationFrame(draw);
   t += inc;
   for(var x = 1; x >= 0; x -= inc) {
      for(var y = 1; y >= 0; y -= inc) {
         var idx = (y * wh + x) * wh * 4;
         var dx = x;
         var dy = y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         var ax = oct(x, y);
         var ay = oct(x + 2, y + t / 3);
         var bx = oct(x + dist * .3 + ax / 22 + 0.7, y + ay / 5 + 2);
         var by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
         var n = oct(x + bx / 5, y + by / 2) * 0.7 + .15;
         var d = ax * by / 2;
         var e = ay * bx / 2;
        
         id[idx + 0] = hue(n + d / 5);
         id[idx + 1] = hue(n / 3 + e / 5 + d);
         id[idx + 2] = hue(d + e);
         id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5)
      }
   }
   $.putImageData(img, 0, 0);
}
function hue($) {
   return 255 * Math.min(Math.max($, 0), 1);
}
function ease(x) {
   return (x > 0.2) ? 0 : i(1, 0, x * 6);
}
var db = document.body;
function i($, db, t) {
   t = t * t * t * (6 * t * t - 15 * t + 10);
   return $ + (db - $) * t;
}
function n(x, y) {
   var i = Math.abs(x * wh + y) % w2h;
   return arr[i];
}
function oct(x, y) {
   var o1 = p(x * 3.0, y * 4.0);
   var o2 = p(x * 4.0, y * 5.0);
   return o1 + o2 * 0.5;
}
function p(x, y) {
   var nx = Math.floor(x);
   var ny = Math.floor(y);   
   return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny);
}
draw();