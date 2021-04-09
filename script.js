window.onload = function load() {
  document.querySelector('#black').classList.add('selected');
};

const colorSection = document.getElementById('color-palette');

function addClassToPallete(event) {
  for (let index = 1; index < 5; index += 1) {
    const divChild = document.querySelector(`#color-palette div:nth-child(${index})`);
    divChild.className = 'color';
  }

  if (event.target !== colorSection) {
    event.target.classList.add('selected');
  }
}

colorSection.addEventListener('click', addClassToPallete);

const pixels = document.querySelector('#pixel-board');

function addColorToPixels(event) {
  const actualColor = document.querySelector('.selected');
  const pixel = event.target;
  pixel.id = actualColor.id;
}

pixels.addEventListener('click', addColorToPixels);

const button = document.querySelector('#clear-board');

function clearPixels() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].removeAttribute('id');
  }
}

button.addEventListener('click', clearPixels);
