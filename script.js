window.onload = createPixels

const frame = document.querySelector('#pixel-board');
function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const box = document.createElement('div');
    frame.appendChild(box);
    for (let index = 0; index < 5; index += 1) {
      const box = document.createElement('div');
      box.classList.add('pixel');
      frame.appendChild(box);
      box.style.backgroundColor = 'white';
      box.style.display = 'inline-block';
      box.style.height = '40px';
      box.style.width = '40px';
      box.style.border = 'solid 1px black';
    }
  }
}

const elementColorBlack = document.querySelector('#color-palette').firstElementChild
elementColorBlack.classList.add('selected');