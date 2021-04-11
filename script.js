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
            sessionStorage.setItem('color', event.target.classList[1]);
        })
    }


sessionStorage.setItem('color', 'null')
function paintPixel () {
    let pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', function(event) {
            if (sessionStorage.getItem('color') === 'null') {
                pixel[index].style.backgroundColor = 'black'
            }else {
                pixel[index].style.backgroundColor = sessionStorage.getItem('color')
            }
        })
    }
}

function buttom () {
    let buttom = document.querySelector('#clear-board');
    let pixel = document.getElementsByClassName('pixel');
    buttom.innerText = 'Limpar';
    for (let index = 0; index < pixel.length; index += 1) {
        buttom.addEventListener('click', function () {
            pixel[index].style.backgroundColor = 'white'
        })
    }
}


window.onload = function () {
buttom()
paintPixel()
}
