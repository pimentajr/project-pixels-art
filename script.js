function linha() {
  const arrayLinha = 25;
  for (let index = 0; index < arrayLinha; index += 1) {
    const addPixel = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    addPixel.appendChild(pixel);
  }
}

const selected = document.querySelectorAll('#color-palette li');
selected.forEach((item) => {
  item.classList.add('selected');
});

selected.forEach((item) => {
  item.classList.remove('selected');
});
selected[0].classList.add('selected');

window.onload = function carregar() {
  linha();
};
