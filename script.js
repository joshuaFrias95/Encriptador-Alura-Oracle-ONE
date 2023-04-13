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

let valor = textArea.value.toLowerCase();

textArea.focus();
textArea.value = "";



function test(test) {
  console.log(test);
}



function copiar() {
  test("Mensaje Copia");
}



function encriptar() {
  let valorEncriptado = valor.replaceAll('a', "ai").replaceAll('e', "enter").replaceAll('i', "imes").replaceAll('o', "ober").replaceAll('u', "ufai");
  
  test(valrEncriptado);
}


function desencriptar() {
  test("Mensaje Descriptar");
}



btnC.onclick = copiar;
btnE.onclick = encriptar;
btnD.onclick = desencriptar;
