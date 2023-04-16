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
const result = document.getElementById('showResult');
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
 'ufai': 'u'
 }; 
 

textArea.value = "";
textArea.focus();



function copiar() {
  navigator.clipboard.writeText(result.innerHTML);
}



function cambiarClase() {

  //Oculta
  document.getElementById('doll').classList.add('oculto');
  document.getElementById('subtitulo').classList.add('oculto');
  document.getElementById('texto').classList.add('oculto');
  //Muestra
  document.getElementById('subtitulo2').classList.remove('oculto');
  document.getElementById('copyarea').classList.remove('oculto');
  result.classList.remove('oculto');
  result.classList.add('ajuste');

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
  
  cambiarClase();
  mostrar(texto);
}


function desencriptar() {
  let texto = textArea.value.toLowerCase(); 
  textArea.value = "";
  
 texto = texto.replace(/ai|enter|imes|ober|ufai/g, function(matched){
  return codigos[matched]
 });
 
 cambiarClase();
 mostrar(texto);
}



btnC.onclick = copiar;
btnE.onclick = encriptar;
btnD.onclick = desencriptar;
