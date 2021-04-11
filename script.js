function changeClassDiv(event) {
  const selectDiv = document.querySelector('.selected');
  selectDiv.classList.remove('selected');

  const newSelectDiv = event.target;
  newSelectDiv.classList.add('selected');
}

const nextDiv = document.getElementsByClassName('color');
for (let index = 0; index < nextDiv.length; index += 1) {
  nextDiv[index].addEventListener('click', changeClassDiv);
}

function paintTable(event) {
  const addSelector = document.querySelector('.selected');
  const colorPixel = getComputedStyle(addSelector).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = colorPixel;
}

const selectElements = document.getElementsByClassName('color');
for (let index = 0; index < selectElements.length; index += 1) {
  selectElements[index].addEventListener('click', changeClassDiv);
}

const tableElements = document.getElementById('pixel-board');
tableElements.addEventListener('click', paintTable);

function clearTable() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}
