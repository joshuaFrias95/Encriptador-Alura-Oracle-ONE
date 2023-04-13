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
const vocales = ['a', 'e', 'i', 'o', 'u'];
const codigos = ["ai", "enter", "imes", "ober", "ufat"];

textArea.focus();
textArea.value = "";


function copiar() {
  console.log("Test de botón de copia");
  textArea.value = "";
}


function encriptar() {
  let valor = textArea.value.toLowerCase();
  let valorEncriptado;
  
  console.log("Test de botón encriptar");
  console.log(valor);
  console.log(valor.split(""));
}


function desencriptar() {
  let valor = textArea.value.toLowerCase();
  console.log("Test de botón desencriptar");
  console.log(valor);
  console.log(valor.split(""));
}



btnC.onclick = copiar;
btnE.onclick = encriptar;
btnD.onclick = desencriptar;
