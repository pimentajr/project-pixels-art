onload = function() {
  function changesToBlack() {
    const blackColor = document.querySelectorAll('.color');
    if (blackColor[0].style.backgroundColor !== 'black') {
      blackColor[0].style.backgroundColor = 'black';
    }
  }
  changesToBlack();

  function fixedInitialSelection(color) {
    let initialSelection = document.querySelectorAll('.color');
    initialSelection[0].className = 'selected';
  }
  fixedInitialSelection();
}
