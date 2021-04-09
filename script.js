const pixelColor = document.querySelectorAll('.color');
function setAsSelected(event) {
  const pixelClicked = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  pixelClicked.target.className = 'color selected';
}
for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', setAsSelected);
}

// function paintPixel(event) { //pintar o pixel do quadro pixel-board
//   const pixelToChange = event.target;
//   pixelToChange.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
// }
