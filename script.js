function changeClassDiv(event){
let selectDiv = document.querySelector('.selected');
selectDiv.classList.remove('selected')

let newSelectDiv = event.target 
newSelectDiv.classList.add('selected')
}
 
let nextDiv = document.getElementsByClassName('color');
for (let index =0; index < nextDiv.length; index += 1) {
  nextDiv[index].addEventListener('click', changeClassDiv); 
}

function paintTable(event){
let addSelector = document.querySelector('.selected'); 
let colorPixel = getComputedStyle(addSelector).backgroundColor;
let pixel = event.target
pixel.style.backgroundColor = colorPixel
}

let selectElements = document.getElementsByClassName('color');
for (let index = 0; index < selectElements.length; index += 1) {
  selectElements[index].addEventListener('click', changeClassDiv)
} 

let tableElements = document.getElementById('pixel-board')
tableElements.addEventListener('click', paintTable)