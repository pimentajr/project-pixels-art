// Criando quadrados para serem pintados
function linha() {
  const arrayLinha = 25;
  for (let index = 0; index < arrayLinha; index += 1) {
    const addPixel = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    addPixel.appendChild(pixel);
  }
}

function mudaCor(ev) {
  const paintColor = document.querySelector('.selected');
  const color = window.getComputedStyle(paintColor).backgroundColor;
  ev.target.style.backgroundColor = color;
}
const addPixel = document.querySelectorAll('#pixel-board');
addPixel.forEach((item) => {
  item.addEventListener('click', mudaCor);
});

//  Executando funções na hora em que a página for carregada
window.onload = function carregar() {
  linha();
};
// Adicionando e removendo classes
const selected = document.querySelectorAll('#color-palette li');
selected[0].classList.add('selected');
function cricar(ev) {
  ev.target.classList.add('selected');
  selected.forEach((item) => {
    item.classList.remove('selected');
    ev.target.classList.add('selected');
  });
}
selected.forEach((item) => {
  item.addEventListener('click', cricar);
});
