const pixelBoard = document.getElementById('pixel-board');
const pixelLine = document.querySelector('#pixel-board').children;

function CreateLineBox() {
  for (let i = 0; i < 5; i += 1) {
    const box = document.createElement('div');
    box.setAttribute('class', 'pixel-line');
    pixelBoard.appendChild(box);
  }
}
CreateLineBox();

function createAllBoxes() {
  for (let i = 0; i < pixelLine.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const box = document.createElement('div');
      box.setAttribute('class', 'pixel');
      pixelLine[i].appendChild(box);
    }
  }
}
createAllBoxes();
