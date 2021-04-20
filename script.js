function createColorElements() {
  const genericAttribute1 = document.getElementById('color-palette');
  for (i = 0; i < 4; i += 1) {
    const genericAttribute2 = document.createElement('li');
    genericAttribute2.className = 'color';
    genericAttribute1.appendChild(genericAttribute2);
  }
  const color = document.getElementsByClassName('color');
  const black = color[0];
  const green = color[1];
  const red = color[2];
  const blue = color[3];
  black.style.backgroundColor = 'black';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
}
createColorElements();

function createPixelBoard() {
  for (let i = 0; i < 5; i += 1) {
@@ -57,8 +57,8 @@ function createColorElements() {

  for (let i = 0; i < genericAttribute1.length; i += 1) {
      genericAttribute1[i].addEventListener('click',function() {
      let color = document.querySelector('.selected')
      genericAttribute1[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
    })
  }
}
paintPixel ();