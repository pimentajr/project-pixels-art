function createPixel(tagName) {
    let element = document.createElement(tagName);
    return element
}

let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
    let pixel = pixelBoard.appendChild(createPixel('div'));
    pixel.className = 'pixel'
    pixel[index]
    }
			
function firstColor () {
let black = document.querySelector('.black');
black.classList.add('selected');
let blackClick = document.querySelector('.selected');
blackClick.addEventListener('click', function() {
    blackClick.backgroundColor = 'black';
})
return blackClick;
}

firstColor();

function removeSelected () {
  let color = document.getElementsByClassName('color');
  for (let index = 0; index < color.length; index += 1){
      color[index].classList.remove('selected');
  }
    return color;
}

let color = document.getElementsByClassName('color');
for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function() {
        removeSelected()
        color[index].classList.add('selected')
        
    })
}


