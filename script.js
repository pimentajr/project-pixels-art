function linha() {
  const arrayLinha = 25;
  for (let index = 0; index < arrayLinha; index += 1) {
    const addPixel = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    addPixel.appendChild(pixel);
  }
}
function classSelect() {
  const select = document.getElementById('black');
  select.classList.add('select');
}

window.onload = function carregar() {
  linha();
  classSelect();
};
