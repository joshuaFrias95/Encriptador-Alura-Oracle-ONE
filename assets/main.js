// Lógica de encriptación y desencriptación

// Botones
const btnC = document.getElementById('btn-c');

// Áreas de texto
const result = document.getElementById('showResult');

// Cuadro de Notificación
const toast = document.querySelector('.toast');
(closeIcon = document.querySelector('.close')),
(progress = document.querySelector('.progress'));


function notification() {
  
  let timer1, timer2;
  
  btnC.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");
    
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);
    
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  });
  
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    
    setTimeout(() => {
      progress.classList.remove("active");
    }, 200);
    
    clearTimeout(timer1);
    clearTimeout(timer2);
  })
}


function clipboard() {
  notification();
  navigator.clipboard.writeText(result.innerHTML);
}

btnC.addEventListener("click", clipboard);
// const textArea = document.querySelector('textarea');
// const btnC = document.getElementById('btn-c'); 
// const btnE = document.getElementById('btn-e');
// const btnD = document.getElementById('btn-d');
// const result = document.getElementById('showResult');

// let encripta = {
//   'a': 'ai',
//   'e': 'enter',
//   'i': 'imes',
//   'o': 'ober',
//   'u': 'ufai'
// }

// let codigos= {
//   'ai': 'a',
//   'enter': 'e',
//   'imes': 'i',
//   'ober': 'o',
//   'ufai': 'u'
// }; 


// textArea.value= "";
// textArea.focus();

// function cambiarClase() {
//   //oculta 
//   document.getElementById('doll').classList.add('oculto');
//   document.getElementById('titulo').classList.add('oculto');
//   //Muestra
//   document.getElementById('corazon').classList.remove('oculto');
//   document.getElementById('titulo2').classList.remove('oculto');
//   result.classList.remove('oculto');
//   result.classList.add('ajuste');
//   btnC.classList.remove('oculto');
//   btnC.classList.add('show');
  
// }

// function mostrar(texto) {
//   result.innerHTML = texto;
  
// }

// function encriptar() {
//   let texto = textArea.value.toLocaleLowerCase();
//   textArea.value = "";
  
//   texto = texto.replace(/a|e|i|o|u/g, function(matched) {
//     return encripta[matched]
//   });
  
//   cambiarClase();
//   mostrar(texto);
// }

// function desencriptar() {
//   let texto = textArea.value.toLocaleLowerCase();
//   textArea.value = "";
  
//   texto = texto.replace(/ai|enter|imes|ober|ufai/g, function(matched) {
//     return codigos[matched]
//   });
  
//   cambiarClase();
//   mostrar(texto);
// }

// function copiar() {
//   navigator.clipboard.writeText(result.innerHTML);
// }


// btnE.onclick = encriptar;
// btnD.onclick = desencriptar;
// btnC.onclick = copiar;

const btnE = document.getElementById('btn-e');
const btnD = document.getElementById('btn-d');



// Fondo 
var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 950, 
  s, a, b,
  x, y, _x, _y,
  _t = 1 / 60; 

var anim = function() {
  $.fillStyle = 'hsla(0, 0%, 90%, 12)';
  $.fillRect(0, 0, w, h);
  for (var i = 0; i < 1; i++) {
    x = 0; 
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= .212 * Math.sin(15);
      y = x * Math.sin(i + 2.0 * t + x /20)/0.75;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j*6) * Math.PI /17.9;
      $.lineTo(w / 2- _x, h / 2 -_y);
    }
    $.lineWidth = .5;
    $.strokeStyle = 'hsla(220,220,220,12)';
    $.stroke();
  }
  t += _t;
  window.requestAnimationFrame(anim);
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
