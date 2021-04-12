window.onload = function loading() {
  function addClassPixels() {
    const pixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
  }
  addClassPixels();

  function blackSelector() {
    const blackColor = document.getElementById('black');
    blackColor.classList.add('selected');
  }
  blackSelector();

  function classSelector() {
    const colorSelected = document.getElementsByClassName('selected');
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', function (event) {
      for (let index = 0; index < colorSelected.length; index += 1) {
        colorSelected[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  classSelector();

  const pixelBoard = document.getElementById('pixel-board');

  pixelBoard.addEventListener('click', function (event) {
    const newColor = document.getElementsByClassName('color selected')[0];
    const color = getComputedStyle(newColor).backgroundColor;
    const eventClick = event.target;
    eventClick.style.backgroundColor = color;
  });

  const btn = document.getElementById('btn');

  function buttonClear(nameButton) {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(nameButton));
    btn.appendChild(button);
    button.id = 'clear-board';
  }
  buttonClear('Limpar');

  const buttonClearPixels = document.getElementById('clear-board');

  function buttonClearEng() {
    buttonClearPixels.addEventListener('click', function() {
      const pixels = document.getElementsByClassName('pixel');
      for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
      }

    })
  }
  buttonClearEng();

  //realizado com o auxílio de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20RGBA&text=A%20fun%C3%A7%C3%A3o%20Math.,ser%C3%A1%20a%20opacidade%20da%20cor.
  function colorSort() {
    const colors = document.getElementsByClassName('color');
    for (let index = 0; index < colors.length; index += 1) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors[index].style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${0.75})`;
    }
  }
  colorSort();
  };

