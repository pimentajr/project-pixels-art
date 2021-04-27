const startColor = document.getElementById('black');
startColor.classList.add('selected');

// identifica o click dentro da paleta de cores
let clickTest = document.getElementById('color-palette');
clickTest.addEventListener("click", selectColor);

function selectColor (event) {
  // atribuir a clase selected a cor que for clicada
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

// criar um evento de click para identificar de onde veio o 
// console.log(listenerFun());
