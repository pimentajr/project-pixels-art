function setClassSelect(event) {
  const setAtributte = document.querySelectorAll('.color');
  for (let index = 0; index < setAtributte.length; index += 1) {
    setAtributte[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function colorPalette() {
  document.getElementById('black').classList.add('selected');

  const clickPalette = document.getElementById('color-palette');
  clickPalette.addEventListener('click', setClassSelect);
}

window.onload = colorPalette;
