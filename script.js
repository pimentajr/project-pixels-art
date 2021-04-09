//6

window.onload = function() {
  let getBlack = document.querySelector('.black');
  if (getBlack.className === 'color black selected') {
    getBlack.className = 'color black';
  } else {
    getBlack.className = 'color black selected';
  }
}