//7 
let getColors = document.querySelector('#color-palette');
getColors.addEventListener('click', function (event) {
  let getSelected = document.querySelector('.selected');
  if (getSelected.classList[0] === 'color') {
    getSelected.className = 'color';
    event.target.className = 'color selected';
  }
});
//set colors
document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('yellow').style.backgroundColor = random_bg_color();
document.getElementById('green').style.backgroundColor = random_bg_color();
document.getElementById('blue').style.backgroundColor = random_bg_color();


//8
let getPixelBoard = document.querySelector('#pixel-board');
getPixelBoard.addEventListener('click', function (event) {
  let getSelected = document.querySelector('.selected');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = getSelected.style.backgroundColor;
  }
});

//9
let getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', function () {
  let getWhitePixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < getWhitePixel.length; i += 1) {
    let eachPixel = getWhitePixel[i];
    eachPixel.style.backgroundColor = 'white';
  }
});

//Refatorando requisito 4
function createNewTable(colum) {
  for (let i = 0; i < colum; i += 1) {
    const newColum = document.createElement('div');
    for (let i2 = 0; i2 < colum; i2 += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'pixel';
      newLine.style.backgroundColor = 'white';
      newColum.appendChild(newLine);
    }
    getPixelBoard.appendChild(newColum);
  }
}
createNewTable(5);

//10
// funcao remover quadro de pixel
function removeTable() {
  let removePixel = document.querySelector('#pixel-board')
  for (let i = 0; i < removePixel.childElementCount;) {
    removePixel.removeChild(removePixel.childNodes[0])
  }
}


// adicionando funcao de remover pixels ao botao VQV
// adicionando funcao de criar novo quadro ao botao VQV
let getVqv = document.querySelector('#generate-board');
let getInputValue = document.querySelector('#board-size')
getVqv.addEventListener('click', function() {
  if (getInputValue.value === '') {
    alert('Board inválido!');
  } else if (getInputValue.value < 5) {
    getInputValue.value = 5;
  } else if (getInputValue.value > 50) {
    getInputValue.value = 50;
  }
  removeTable();
  createNewTable(getInputValue.value);
})

//12
// criando cores aleatorias
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
  }
  random_bg_color(); 

