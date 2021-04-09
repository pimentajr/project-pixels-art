const firstSelectedColor = document.getElementById('black-box');
firstSelectedColor.classList = ('color selected');

function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  tableColor.addEventListener('click', selectingNewColor)
  function selectingNewColor(event) {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    event.target.className = 'color selected';
  }
}
colorSelection();
