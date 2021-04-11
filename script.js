function linha() {
  for (let index = 0; index < 25; index += 1) {
    const addPixel = document.querySelector('#pixel-board');
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    addPixel.appendChild(pixel);
  }
}

window.onload = function carregar() {
  linha();
};
