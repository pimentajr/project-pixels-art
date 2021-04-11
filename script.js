window.onload = function load() {
  document.querySelector('#black').classList.add('selected');
};

const colorSection = document.getElementById('color-palette');

function addClassToPallete(event) {
  for (let index = 1; index < 5; index += 1) {
    const divChild = document.querySelector(`#color-palette div:nth-child(${index})`);
    divChild.className = 'color';
  }

  if (event.target !== colorSection) {
    event.target.classList.add('selected');
  }
}

colorSection.addEventListener('click', addClassToPallete);

const pixels = document.querySelector('#pixel-board');

function addColorToPixels(event) {
  const actualColor = document.querySelector('.selected');
  const pixel = event.target;
  pixel.id = actualColor.id;
}

pixels.addEventListener('click', addColorToPixels);

const button = document.querySelector('#clear-board');
let allPixels = document.querySelectorAll('.pixel');

const input = document.querySelector('#board-size')

input.addEventListener('input', numberTyped)

function numberTyped(event){
  let number = event.target.value
  input.value = number
}

const Table = document.querySelector('tbody')
let tableChild = document.querySelectorAll('tr')
const trChild = document.querySelectorAll('td')
const createPixels = document.querySelector('#generate-board')

createPixels.addEventListener('click', function(){
  if(input.value === ''){
    return alert('Board inválido!')
  }

  if(input.value > 50){
    input.value = 50
  }else if(input.value < 5){
    input.value = 5
  }

  for (let index = 0; index < tableChild.length; index += 1){
    Table.removeChild(tableChild[index])
  }
  

  for (let index = 1; index <= input.value; index+=1){
    let row = document.createElement('tr')
    Table.appendChild(row)
    for (let index = 1; index <= input.value; index +=1){
      let column = document.createElement('td')
      column.className = 'pixel'
      row.appendChild(column)
    }
  }
  allPixels = document.querySelectorAll('.pixel')
  tableChild = document.querySelectorAll('tr')
  console.log(allPixels.length)
})

function clearPixels() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].removeAttribute('id');
  }
}

button.addEventListener('click', clearPixels);
