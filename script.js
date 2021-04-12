function onLoadWindow() {
  /* os valores de referência RGB foram obtidos em https://www.homehost.com.br/blog/tutoriais/tabela-de-cores-html/#:~:text=Os%20RGB%20%C3%A9%20declarado%20com,RGB%20das%20cores%20mais%20utilizadas. */
  function randomColor() {
    const color1 = Math.ceil(Math.random() * 255);
    const color2 = Math.ceil(Math.random() * 255);
    const color3 = Math.ceil(Math.random() * 255);
    const ret = `rgb(${color1}, ${color2}, ${color3})`;
    return ret;
  }

  const firstColor = document.querySelector('.red');
  firstColor.style.backgroundColor = randomColor();
  const secondColor = document.querySelector('.blue');
  secondColor.style.backgroundColor = randomColor();
  const thirdColor = document.querySelector('.yellow');
  thirdColor.style.backgroundColor = randomColor();
  const blackColor = document.querySelector('.black');
  blackColor.style.backgroundColor = 'black';

  const divColorSelected = document.getElementById('color-palette');
  let divColorSelectedUpdate = document.querySelector('.selected');
  let colorSelected = document.querySelector('.selected').classList[1];
  divColorSelected.addEventListener('click', function onename(event) {
    divColorSelectedUpdate.classList.remove('selected');
    divColorSelectedUpdate = event.target;
    divColorSelectedUpdate.classList.add('selected');
    colorSelected = divColorSelectedUpdate.style.backgroundColor;
  });

  const pixelSelected = document.getElementById('pixel-board');
  pixelSelected.addEventListener ('click', function (event) {
    const printPixel = event.target;
    if (printPixel.classList.length > 1) {
      printPixel.classList.remove(printPixel.classList[1]);
    }
    printPixel.style.backgroundColor = colorSelected;
  });

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    const allPixels = document.getElementsByClassName('pixel');
    const boardPixel = document.getElementById('pixel-board');
    for (let index = 0; index < allPixels.length; index += 1) {
      allPixels[index].style = [];
    }
    if (boardPixel.classList) {
      boardPixel.classList = [];
      boardPixel.style = [];
    }
  });

  const pixelBoard = document.getElementById('pixel-board');
  const resizeButton = document.getElementById('generate-board');
  const size = document.getElementById('board-size');
  resizeButton.addEventListener('click', function () {
    let count = parseInt(size.value, 10);
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
        const element = document.createElement('tr');
        pixelBoard.appendChild(element);
        for (let indexy = 0; indexy < count; indexy += 1) {
          const pixelElement = document.createElement('td');
          pixelElement.className = 'pixel';
          element.appendChild(pixelElement);
        }
      }
    }
  });
}
window.onload = onLoadWindow;
