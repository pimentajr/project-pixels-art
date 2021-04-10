window.onload = function initial() {
  let initialColor = document.querySelector('.black');
  initialColor.classList.add('selected');

  let colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', function (event) {
      let colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }

  function pixelColor() {
    let pixel = document.getElementById('pixel-board');
    pixel.addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      pixel = event.target
      pixel.style.backgroundColor = selected.classList[1];
    });
  }
  pixelColor();

  function clearbutton() {
    let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', function () {
      let pixelStyle = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixelStyle.length; index += 1) {
        pixelStyle[index].style.backgroundColor = 'white';
      }
    });
  }
  clearbutton();
};
