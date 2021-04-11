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
        color[index].addEventListener('click', function (event) {
            removeSelected()
            color[index].classList.add('selected')
            localStorage.setItem('color', 'black')
            localStorage.setItem('color', event.target.classList[1]);
        })
    }



function paintPixel () {
    let pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', function(event) {
            pixel[index].style.backgroundColor = localStorage.getItem('color')
        })
    }
}
paintPixel()
