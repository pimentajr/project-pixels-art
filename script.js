function selectColors() {
  const colors = ['black', 'blue', 'red', 'yellow', 'green'];
  const paletlist = document.getElementsByClassName('color');
  for (let index = 0; index < paletlist.length; index += 1) {
    paletlist[index].style.backgroundColor = colors[index];
  }
}

function createBoard() {
  
}
window.onload = function () {
  selectColors();
};
