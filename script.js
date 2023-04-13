//Typed.js

const typed = new Typed('.typed', {
  strings: ['<i class="crypted">Encripta</i>',
            '<i class="crypted">Desencripta</i>',
            '<i class="crypted">Repite</i>'
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


// Botón copiar
function copiar() {
  console.log("Test de botón de copia");
}

function encriptar() {
  console.log("Test de botón encriptar");
}

function desencriptar() {
  console.log("Test de botón desencriptar");
}

document.getElementById('btn-c').onclick = copiar;
document.getElementById('btn-d').onclick = desencriptar;
document.getElementById('btn-e').onclick = encriptar;
