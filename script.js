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


// Lógica de encriptación y desencriptación

const textArea = document.querySelector('textarea');
const btnC = document.getElementById('btn-c');
const btnE = document.getElementById('btn-e');
const btnD = document.getElementById('btn-d');
 let encripta= {
 'a': 'ai',
 'e': 'enter',
 'i': 'imes',
 'o': 'ober',
 'u': 'ufai'
 };
 
 let codigos= {
 'ai': 'a',
 'enter': 'e',
 'imes': 'i',
 'ober': 'o',
 'ufat': 'u'
 }; 
 

textArea.value = "";
textArea.focus();



function copiar() {
  console.log("Copia");
}

function mostrar(texto) {
  
  document.getElementById('showResult').innerHTML = texto;
}

function encriptar() {
  let texto = textArea.value.toLowerCase();
  textArea.value = "";
  
  texto = texto.replace(/a|e|i|o|u/g, function(matched){
    return encripta[matched]
  });
  
  mostrar(texto);
}


function desencriptar() {
  let texto = textArea.value.toLowerCase(); 
  textArea.value = "";
  
 texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched){
  return codigos[matched]
 });
 
 mostrar(texto);
}



btnC.onclick = copiar;
btnE.onclick = encriptar;
btnD.onclick = desencriptar;
