function changesToBlack() {
  let colorPalette = document.querySelector('#color-palette');
  let blackColor = document.querySelectorAll('.color');
  if (blackColor[0].style.backgroundColor !== 'black') {
    blackColor[0].style.backgroundColor = 'black';
  }
}
changesToBlack();

console.log();
