window.onload = function() {
  function addClassPixels() {
    const pixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
  }
  addClassPixels();

  function blackSelector() {
    blackColor = document.getElementById('black');
    blackColor.classList.add('selected');
}

blackSelector();

};