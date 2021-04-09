window.onload = function() {
  function primaryColors(colors) {
    let colorBox = document.querySelectorAll('.color');

    for (let index = 0; index < colors.length; index += 1) {
      colorBox[index].style.backgroundColor = colors[index];
    }
  }

  primaryColors(['black', 'yellow', 'green', 'blue']);

}