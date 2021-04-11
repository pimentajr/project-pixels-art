function colorPalette() {
  const startColor = document.getElementById('black');
  startColor.classList.add('selected');
}

window.onload = colorPalette;

function setClassSelect(event) {
  const setAtributte = document.querySelectorAll('.color');
  for (let index = 0; index < setAtributte.length; index += 1) {
    setAtributte[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
addEventListener('click', setClassSelect);
