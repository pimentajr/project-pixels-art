window.onload = onLoadWindow();

function onLoadWindow() {
  /* os valores de referência RGB foram obtidos em https://www.homehost.com.br/blog/tutoriais/tabela-de-cores-html/#:~:text=Os%20RGB%20%C3%A9%20declarado%20com,RGB%20das%20cores%20mais%20utilizadas. */
  function randomColor() {
    let color1 = Math.ceil(Math.random() * 255);
    let color2 = Math.ceil(Math.random() * 255);
    let color3 = Math.ceil(Math.random() * 255);
    return 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';
  }

  let firstColor = document.querySelector('.red');
  firstColor.style.backgroundColor = randomColor();
  let secondColor = document.querySelector('.blue');
  secondColor.style.backgroundColor = randomColor();
  let thirdColor = document.querySelector('.yellow');
  thirdColor.style.backgroundColor = randomColor();
  let blackColor = document.querySelector('.black');
  blackColor.style.backgroundColor = 'black';

  let divColorSelected = document.getElementById('color-palette');
  let divColorSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  divColorSelected.addEventListener('click', function(event) {
    divColorSelectedUpdate.classList.remove('selected');
    divColorSelectedUpdate = event.target;
    divColorSelectedUpdate.classList.add('selected');
    colorSelected = divColorSelectedUpdate.style.backgroundColor;
  });
  
  let pixelSelected = document.getElementById('pixel-board');
  pixelSelected.addEventListener('click', function(event) {
    let printPixel = event.target;
    if (printPixel.classList.length > 1) {
      printPixel.classList.remove(printPixel.classList[1]);
    }
    printPixel.style.backgroundColor = colorSelected;
  })

  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function(event) {
    let allPixels = document.getElementsByClassName('pixel');
    let boardPixel =document.getElementById('pixel-board');
    for (let index in allPixels) {
        allPixels[index].style = [];
    }
    if (boardPixel.classList) {
      boardPixel.classList = [];
      boardPixel.style = [];
    }
  });

  let pixelBoard = document.getElementById('pixel-board');
  let resizeButton = document.getElementById('generate-board');
  let size = document.getElementById('board-size');
  resizeButton.addEventListener('click', function(event) {
    let count = parseInt(size.value);
    if (count < 5) {
      count = 5;
    } if (count > 50) {
      count = 50;
    }
    if (size.value === '') {
      alert('Board inválido!');
    } else {
      pixelBoard.innerText = '';
      for (let index = 0; index < count; index += 1) {
        let element = document.createElement('tr');
        pixelBoard.appendChild(element);
        for (let indexy = 0; indexy < count; indexy += 1) {
          let pixelElement = document.createElement('td');
          pixelElement.className = 'pixel';
          element.appendChild(pixelElement);
        }
      }
    }
  })
};