window.onload = function () {
  function addClassPixels() {
    const pixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
  }
  addClassPixels();

  function blackSelector() {
    const blackColor = document.getElementById('black');
    blackColor.classList.add('selected');
  }
  blackSelector();

  function classSelector() {
    const colorSelected = document.getElementsByClassName('selected');
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', function (event) {
      for (let index = 0; index < colorSelected.length; index += 1) {
        colorSelected[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  classSelector();

};
