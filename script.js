window.onload = function() {
  function addClassPixels() {
    const pixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
  }
  addClassPixels();

  function blackSelector() {
    let blackColor = document.getElementById('black');
    blackColor.classList.add('selected');
  }
  blackSelector();

  function classSelector() {
    const colorSelected = document.getElementsByClassName('selected')[0];
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', function(event) {
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
  classSelector();

};
