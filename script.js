window.onload = onLoadWindow();

function onLoadWindow() {

  let divColorSelected = document.getElementById('color-palette');
  let divColorSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  divColorSelected.addEventListener('click', function(event) {
    divColorSelectedUpdate.classList.remove('selected');
    divColorSelectedUpdate = event.target;
    divColorSelectedUpdate.classList.add('selected');
    colorSelected = divColorSelectedUpdate.classList[1];
  });
  
  let pixelSelected = document.getElementById('pixel-board');
  pixelSelected.addEventListener('click', function(event) {
    let printPixel = event.target;
    if (printPixel.classList.length > 1) {
      printPixel.classList.remove(printPixel.classList[1]);
    }
    printPixel.classList.add(colorSelected);
  })

  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function(event) {
    let allPixels = document.getElementsByClassName('pixel');
    let boardPixel =document.getElementById('pixel-board');
    for (let index in allPixels) {
        allPixels[index].className = 'pixel';
    }
    if (boardPixel.classList) {
      boardPixel.classList = [];
    }
  });

  let pixelBoard = document.getElementById('pixel-board');
  let resizeButton = document.getElementById('generate-board');
  let size = document.getElementById('board-size');
  resizeButton.addEventListener('click', function(event) {
    if (size.value === '') {
      alert('Board inválido!');
    } else {
      pixelBoard.innerText = '';
      for (let index = 0; index < size.value; index += 1) {
        let element = document.createElement('tr');
        pixelBoard.appendChild(element);
        for (let indexy = 0; indexy < size.value; indexy += 1) {
          let pixelElement = document.createElement('td');
          pixelElement.className = 'pixel';
          element.appendChild(pixelElement);
        }
      }
    }
  })
};