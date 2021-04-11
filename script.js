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
  const selected = document.getElementById('black');
  selected.classList.add('selected');
}

window.onload = function carregar() {
  linha();
  classSelect()
  console.log(black)
};
