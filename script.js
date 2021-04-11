function randomColors() {
  let blackBox = document.createElement('div');
  blackBox.style.backgroundColor = 'black';
  blackBox.classList.add('color', 'selected');
  let colorSection = document.getElementById('color-palette');
  colorSection.appendChild(blackBox);
  for (let index = 0; index < 3; index += 1) {
    let colorBox = document.createElement('div');
    colorBox.className = 'color';
    let randColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    colorBox.style.backgroundColor = randColor;
    colorSection.appendChild(colorBox);
  }
}
randomColors();

function defaultTable () {
  let containerTable = document.getElementById('pixel-board');
  let newTable = document.createElement('div');
  newTable.id = 'new-table'
  containerTable.appendChild(newTable);
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
defaultTable();

function updateTable (){
  let button = document.getElementById('generate-board');
  let containerTable = document.getElementById('pixel-board');
  let defaultTable = document.getElementById('new-table');
  
  button.addEventListener('click', function () {
    let newerTable = document.createElement('div');
    containerTable.replaceChild(newerTable, defaultTable);
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
    newerTable.id = 'new-table';
    defaultTable = newerTable;
  })
}
updateTable();

function colorSelector() {
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
  let currentTable = document.getElementById('pixel-board');
  currentTable.addEventListener('click', function (event) {
    console.log(event.target)
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
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