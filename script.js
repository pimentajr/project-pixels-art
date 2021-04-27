const startColor = document.getElementById('black');
startColor.classList.add('selected');

// identifica o click dentro da paleta de cores
let clickTest = document.getElementById('color-palette');
clickTest.addEventListener("click", listenerFun);

function listenerFun (event) {
  // atribuir a clase selected a cor que for clicada
  event.classList.add('selected');
console.log(event.target);
}

// criar um evento de click para identificar de onde veio o click
// console.log(listenerFun());
