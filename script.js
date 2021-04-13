let colorPalette = document.getElementById('color-palette');

function selectColor(event) {
  let selectedDiv = document.querySelector('.selected');
  selectedDiv.classList.remove('selected');
  event.target.classList.add('selected');
}

colorPalette.addEventListener('click', selectColor);