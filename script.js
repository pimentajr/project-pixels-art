/*function createGrid() { //melhorar criando igual html
  let gridButton = document.getElementById('generate-board');
  let tblSection = document.getElementById('section-teste');
  let initTable = document.getElementById('pixel-board');
  gridButton.addEventListener('click', function () {
    initTable.removeChild(document.getElementById('table'));
    let tbl = document.createElement('table');
    tbl.id = 'table';
    let gridSize = document.getElementById('board-size').value;
    if (gridSize === '') {
      alert('Board inválido!');
    }
    initTable.appendChild(tbl);
    if (gridSize < 5) {
      gridSize = 5;
    }
    if (gridSize > 50) {
      gridSize = 50;
    }
    for (let indexRow = 0; indexRow < gridSize; indexRow += 1) {
      let tr = tbl.insertRow();
      for (let indexColumn = 0; indexColumn < gridSize; indexColumn += 1) {
        let td = tr.insertCell();
        td.className = 'pixel';
      }
    }
  });
}
createGrid();
*/

function newBoard () {
  let containerNewTable = document.getElementById('new-pixel-board');
  let newTable = document.createElement('div');
  newTable.id = 'new-table'
  containerNewTable.appendChild(newTable);
  newTable.className = 'tabela'
  let n = 5;
  for (let rows = 0; rows < n; rows += 1) {
    let tr = document.createElement('div');
    tr.classList.add('tr');
    newTable.appendChild(tr)
    for (let columns = 0; columns < n; columns += 1) {
      let td = document.createElement('div');
      td.classList.add('pixel');
      tr.appendChild(td);
    }
  }
}
newBoard();

function updateBoard (){
  let button = document.getElementById('generate-board');
  let tableSection = document.getElementById('new-pixel-board');
  let rawTable = document.getElementById('new-table');
  
  button.addEventListener('click', function () {
    let newerTable = document.createElement('div');
    newerTable.id = 'newer-table';
    newerTable.className = 'tabela';
    tableSection.replaceChild(newerTable, rawTable);
    let inputValue = document.getElementById('board-size').value;

    if (inputValue === '') {
      alert('Board inválido!');
      inputValue = 5;
    }
    if (inputValue < 5) {
      inputValue = 5;
    }
    if (inputValue > 50) {
      inputValue = 50;
    }
    for (let rows = 0; rows < inputValue; rows += 1) {
      let tr = document.createElement('div');
      tr.classList.add('tr');
      newerTable.appendChild(tr)
      for (let columns = 0; columns < inputValue; columns += 1) {
        let td = document.createElement('div');
        td.classList.add('pixel');
        tr.appendChild(td);
      }
    }
    rawTable = newerTable;
  })
}
updateBoard();

function colorSelector() {
  let initialColor = document.getElementById('black');
  initialColor.classList.add('selected');
  let colorOptions = document.getElementsByClassName('color');
  for (let index = 0; index < colorOptions.length; index += 1) {
    colorOptions[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < colorOptions.length; index2 += 1) {
        if (colorOptions[index2].classList.contains('selected') === true) {
          colorOptions[index2].classList.remove('selected');
        }
        event.target.classList.add('selected')
      }

    });
  }
}
colorSelector()
 
function fillPixels() {
  let table = document.querySelector('.tabela');
  table.addEventListener('click', function (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').id;
  })
}
fillPixels();

function clearBoard() {
  let clearButton = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  clearButton.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();