window.onload = function colorPalette() {
  const startColor = document.getElementById('black');
  startColor.classList.add('selected');
};

function setClassSelect(event) {
  const setAtributte = document.querySelectorAll('.color');
  for (let index = 0; index < setAtributte.length; index += 1) {
    setAtributte[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const clickPalette = document.querySelector('#color-palette');
clickPalette.addEventListener('click', setClassSelect);
