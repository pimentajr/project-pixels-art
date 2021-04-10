let pixelBoard = document.querySelector('#pixel-board'); 
for (let index = 0; index <= 24; index +=1) {
  let pixelDivs = document.createElement('div');
  pixelDivs.className = "Pixel";
  pixelBoard.appendChild(pixelDivs);
}
