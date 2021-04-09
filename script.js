function changesToBlack() {
  const blackColor = document.querySelectorAll('.color');
  if (blackColor[0].style.backgroundColor !== 'black') {
    blackColor[0].style.backgroundColor = 'black';
  }
}
changesToBlack();

