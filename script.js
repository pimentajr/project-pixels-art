window.onload = function initial() {
  let initialColor = document.querySelector('#black');
  initialColor.classList.add('selected');
 
  let colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', function (event) {
      let colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};
