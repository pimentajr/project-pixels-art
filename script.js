window.onload = function() {

  let boardSection = document.getElementById('pixel-board');

  //Cria o quadro com os quadrados brancos;
  for (let index = 0; index < 25; index += 1) {
      let everyPixel = document.createElement('div');
      everyPixel.setAttribute('class', 'pixel');
      boardSection.appendChild(everyPixel);
  }
}


