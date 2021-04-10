const a = 5;

window.onload = function start() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';

  function randomBgCcolor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    return bgColor;
  }

  document.getElementsByClassName('color')[1].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[2].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[3].style.backgroundColor = randomBgCcolor();
};

for (let index = 0; index < a; index += 1) {
  const addDiv = document.createElement('div');
  const selectPixelBoard = document.getElementById('pixel-board');
  for (let index2 = 0; index2 < a; index2 += 1) {
    const addDivPixel = document.createElement('div');
    addDiv.appendChild(addDivPixel);
    addDivPixel.className = ('pixel');
  }
  selectPixelBoard.appendChild(addDiv);
}
