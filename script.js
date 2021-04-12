function selectThis(e) {
	document.getElementsByClassName('selected')[0].classList.remove('selected');
	e.target.classList.add('selected');
	let selectedColor = e.target.classList[1];
	setPixelColor(selectedColor);
}

let palette = document.getElementById('color-palette');
palette.addEventListener('click', selectThis);

function setPixelColor(color) {
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event){
	  event.target.style.backgroundColor = color;
  });
}
