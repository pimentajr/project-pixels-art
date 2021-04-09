
let colorPalette = document.getElementById('color-palette')
let colors = document.getElementsByClassName('color')
console.log(colorPalette);

colorPalette.addEventListener('click', function(event){
  for (key of colors) {
    key.classList.remove('selected');
  }
  event.target.classList.add('selected')
})
// let selectedColor = 