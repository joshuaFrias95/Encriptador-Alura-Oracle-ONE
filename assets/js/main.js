// Lógica de encriptación y desencriptación

// Botones
const btnE = document.getElementById('btn-e');
const btnD = document.getElementById('btn-d');
const btnC = document.getElementById('btn-c'),
  toast = document.querySelector(".toast");
  (closeIcon = document.querySelector(".close")),
    (progress = document.querySelector(".progress"));

// Notificación de copiado
function copiar() {
  let timer1, timer2;
  
  btnC.addEventListener("click", () => {
    // Aprovecha el evento click para llamar la función clipboard()
    clipboard();
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
    }, 300);
    
    clearTimeout(timer1);
    clearTimeout(timer2);
  })
}


// Función copiar al portapapeles
function clipboard() {
  
  navigator.clipboard.writeText(result.innerHTML);
}


// Áreas de texto
const textArea = document.querySelector('textarea');
const result = document.getElementById('showResult');
const resultadoOculto = document.getElementById('resultadoOculto');
const vector = document.getElementById('vector');
const vectorGato = document.getElementById('vectorCat');
const msnTexto = document.getElementById('msnTexto');
const catTexto = document.getElementById('catTexto');


// Llaves de encriptación y desencriptación
let encripta = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

let codigos = {
  'ai': 'a',
  'enter': 'e',
  'imes': 'i',
  'ober': 'o',
  'ufat': 'u'
}


textArea.value= "";

// Alerta de campo de texto vacío
function alerta(accion) {
  alert("¡Alto ahí!, aún no hay nada por " + accion + ". Recuerda ingresar un texto.")
}


// Imprimir resultado en etiqueta <p>
function mostrar(texto) {
  result.innerHTML = texto;
}


function encriptar() {
  // Para mayor comodidad permitimos caracteres en mayúscula que posteriormente transformamos en minúscula
  let texto = textArea.value.toLowerCase();
  textArea.value = "";
  
  // Validamos que el área de texto no esté vacío
  if (texto.length == 0) {
    alerta("encriptar")
  } else {
    
    // Validación de caracteres con una expresión regular
    let condicion = /^[a-z\s]+$/;
    
    if (texto.match(condicion)) {
      texto = texto.replace(/a|e|i|o|u/g, function(matched) {
        return encripta[matched]
      });
     mostrar(texto);
     mostrarOcultar();
    
    } else {
      alert("Este programa no acepta números o acentos. ¿Lo intentamos de nuevo?")
    } 
  }
 
}



function desencriptar() {
  let texto = textArea.value.toLowerCase();
  
  textArea.value = "";
  
  if (texto.length == 0) {
    alerta("desencriptar")
  } else {
  
     texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched) {
       return codigos[matched]
     });
        mostrar(texto);
     mostrarOcultar();
  }
  
  
}



// Cambio de clases en tarjeta derecha
function mostrarOcultar() {
  resultadoOculto.classList.remove('oculto');
  vector.classList.add('oculto');
  vectorGato.classList.add('oculto');
  msnTexto.classList.add('oculto');
  catTexto.classList.add('oculto');
}


// Acciones de botones
btnC.onclick = copiar();
btnE.onclick = encriptar;
btnD.onclick = desencriptar;




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
