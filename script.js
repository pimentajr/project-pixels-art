const firstSelectedColor = document.getElementById('black-box');
firstSelectedColor.classList = ('color selected');

function colorSelection() {
  const tableColor = document.querySelector('#color-palette');
  function selectingNewColor(event) {
    const actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    event.target.className = 'color selected';
  }
  tableColor.addEventListener('click', selectingNewColor);  
}
colorSelection();

function printBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  
  pixelBoard.addEventListener('click', function(event) {
    let selectedDiv = document.querySelector('.selected').id;
    console.log(selectedDiv);
    let printBox = event.target;
    console.log(printBox);
    switch (selectedDiv) {
      case 'black-box':
        printBox.style.backgroundColor = 'black';
        break;
      case 'red-box':
        printBox.style.backgroundColor = 'red';
        break;
      case 'green-box':
        printBox.style.backgroundColor = 'green';
        break;
      case 'yellow-box':
        printBox.style.backgroundColor = 'yellow'
        break;
    }
  })
}
printBoard()
