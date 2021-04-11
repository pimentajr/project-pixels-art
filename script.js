function colorPalette() {
  const startColor = document.getElementById('black');
  startColor.classList.add('selected');
  function setClassSelect(event) {
    const setAtributte = document.querySelectorAll('.color');
    for (let index = 0; index < setAtributte.length; index += 1) {
      setAtributte[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
  const clickPalette = document.getElementById('color-palette');
  clickPalette.addEventListener('click', setClassSelect);
  function getPixel(event) {
    const getColor = document.querySelectorAll('.color');
    let selectColor = '';
    for (let index = 0; index < getColor.length; index += 1) {
      if (getColor[index].classList[1] === 'selected') {
        selectColor = getColor[index].id;
      }
      event.target.style.backgroundColor = selectColor;
    }
  }
  const clickPrint = document.getElementById('pixel-board');
  clickPrint.addEventListener('click', getPixel);
}

window.onload = colorPalette;
