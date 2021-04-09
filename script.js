//7
let getColors = document.querySelector('#color-palette');
getColors.addEventListener('click', function(event) {
  let getSelected = document.querySelector('.selected');
  if (getSelected.classList[0] === 'color') {
    getSelected.className = 'color';
    event.target.className = 'color selected';
  } 
})

