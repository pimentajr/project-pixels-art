const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function color1Selector(color) {
  color1.style.backgroundColor = color;
}

function color2Selector(color) {
  color2.style.backgroundColor = color;
}

function color3Selector(color) {
  color3.style.backgroundColor = color;
}

function color4Selector(color) {
  color4.style.backgroundColor = color;
}
color1Selector('black');
color2Selector('green');
color3Selector('red');
color4Selector('yellow');

// // const pixelBoard = document.querySelector('#pixel-board');
// // for (let index = 1; index < 26; index += 1) {
// //   const block = document.createElement('div');
// //   block.className = 'pixel';
// //   block.id = ('pixel' + index);

// //   pixelBoard.appendChild(block);
// // }

// // for (let index = 1; index < 6; index +=1) {
// //   const newPixel = document.createElement('td');
// //   newPixel.className = 'pixel';
// //   newPixel.id = 'pixel' + index;
// //   document.querySelector('#linha1').appendChild(newPixel);
// // }
// // function pixelBoardCreator (valueMin, valueMax, rowNumber) {
// //   for (let index = valueMin; index <= valueMax; index += 1) {
// //     const rowPixelBoard = document.createElement('tr');
// //     rowPixelBoard.id = 'row' + index;
// //     document.querySelector('#pixel-board').appendChild(rowPixelBoard);
// //     for (let indexB = valueMin; indexB <= valueMax; indexB += 1) {
// //         const newPixel = document.createElement('td');
// //         newPixel.className = 'pixel';
// //         newPixel.id = 'pixel' + indexB;
// //         document.querySelector('#row1').appendChild(newPixel);
// //     }
// //   }
// // }
// // function pixelBoardCreator(rows, collumns) {
// //     for (let indexR = 0; indexR < collumns; indexR += 1) {
// //         const newPixelCollum = document.createElement('td');
// //         newPixelCollum.className = 'pixel';
// //         document.querySelector('#pixel-board').appendChild(newPixelCollum);
// // }
// //     for (let index = 1; index <= rows; index += 1) {
// //         const newPixelRow = document.createElement('tr');
// //         newPixelRow.className = 'pixel';

// //         document.querySelectorAll('td')[index].appendChild(newPixelRow);
// //     }
// // }

function pixelBoardCreator(collumns, rows) {
  for (let indexR = 1; indexR <= rows; indexR += 1) {
    const newPixelRow = document.createElement('tr');
    document.querySelector('#pixel-board').appendChild(newPixelRow);
  }
  for (let indexT = 0; indexT < rows; indexT += 1) {
    for (let index = 0; index < collumns; index += 1) {
      const newPixelCollum = document.createElement('td');
      const tableRow = document.querySelectorAll('tr');
      newPixelCollum.className = 'pixel';

      tableRow[indexT].appendChild(newPixelCollum);
    }
  }
}
pixelBoardCreator(5, 5);
// O Gustavo Lemes me ajudou a consertar o erro pelo slack.

// document.querySelector('#color1').classList.add('selected');

// const colors = document.querySelectorAll('.color');
// let selectedColor = '';
// for (let index = 0; index < colors.length; index += 1) {
//   colors[index].addEventListener ('click', function() {
//     colors[index].classList.remove('selected')
//     // console.log('aaaaaaaaaa')
//     // if (colors[index].getAttribute('class') === 'color selected') {
//     //   selectedColor = colors[index].style.backgroundColor
//     // } else if ()
//   })

// }
// console.log(selectedColor)

const colors = document.querySelectorAll('.color');

function classChanger (element) {
  for (index = 0; index < colors.length; index += 1) {
    colors[index].className = 'color';
  }
  element.target.className = 'color selected';
}
colors[0].addEventListener('click', classChanger);
colors[1].addEventListener('click', classChanger);
colors[2].addEventListener('click', classChanger);
colors[3].addEventListener('click', classChanger);

colors[0].onload = setColor1();
function setColor1 () {
  colors[0].className = 'color selected';
  console.log('alibaba');
}
