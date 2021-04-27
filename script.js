const startColor = document.getElementById('black');
startColor.classList.add('selected');

// atribuir a clase selected a cor que for clicada
// criar um evento de click para identificar de onde veio o click

let clickTest = document.getElementsByClassName('color');

function listenerFun (event) {
  for (let index = 0; index < clickTest.length; index += 1) {
    clickTest[index].addEventListener("click", listenerFun);
  }
}
console.log(listenerFun());