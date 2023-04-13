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

const textArea = document.querySelector('textarea');
const btnC = document.getElementById('btn-c');
const btnD = document.getElementById('btn-d');
const btnE = document.getElementById('btn-e');

textArea.focus();
textArea.value = "";

// Botón copiar
function copiar() {
  console.log("Test de botón de copia");
  textArea.value = "";
}

function encriptar() {
  let valor = textArea.value;
  let valorEncriptado;
  
  console.log("Test de botón encriptar");
  console.log(valor);
}

function desencriptar() {
  let valor = textArea.value;
  console.log("Test de botón desencriptar");
  console.log(valor);
}

btnC.onclick = copiar;
btnE.onclick = encriptar;
btnD.onclick = desencriptar;
