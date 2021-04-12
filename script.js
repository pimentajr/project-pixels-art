function setPixelColor(color) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color;
  });
}

function selectThis(e) {
  if (e.target.classList[0] === "color"){
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add('selected');
    const selectedColor = e.target.classList[1];
    setPixelColor(selectedColor);
  }
}

const palette = document.getElementById('color-palette');
palette.addEventListener('click', selectThis);
