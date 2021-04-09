function selectColor() {
    let blackColor = document.getElementById('black');
    blackColor.classList.add('selected');

    let colorOptions = document.getElementsByClassName('color');
    for (let index = 0; index < colorOptions.length; index += 1) {
      colorOptions[index].addEventListener('click', function (event) {
        for (let index2 = 0; index2 < colorOptions.length; index2 += 1) {
          if (colorOptions[index2].classList.contains('selected') === true) {
            colorOptions[index2].classList.remove('selected');
          }
          event.target.classList.add('selected');
        }
      });
    }
    let selectedColor = document.querySelector('.selected').id;
   
    let pixelGrid = document.getElementById('table');
    table.addEventListener('click', function(event) {
    event.target.style.backgroundColor = selectedColor;
  })
}
selectColor();

function fillPixels() {
  let pixelGrid = document.getElementById('table');
  pixelGrid.addEventListener('click', function(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').id;
  })
}
fillPixels()