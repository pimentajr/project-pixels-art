window.onload = function() {
let numberOfBlock = 5
let section = document.querySelector('#pixel-board')

function blockPixel(size) {
  for (let index = 0; index < size; index += 1) {
    let pixelColumn = document.createElement('div');
    section.appendChild(pixelColumn)
    for (let index = 0; index < size; index += 1) {
      let pixelLine = document.createElement('div');
      pixelLine.className = 'pixel'
      pixelColumn.appendChild(pixelLine)
    }
  }
}
blockPixel(numberOfBlock)
}