let elementH1 = document.getElementById('title');
elementH1.innerText = 'Paleta de Cores';

function createPalettes() {
  for (index = 0; index < 4; index += 1) {
    let palettes = document.createElement('div');
    let allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes();

let squareColors = document.getElementsByClassName('color');
console.log(squareColors);
squareColors[0].style.backgroundColor = 'black';
squareColors[1].style.backgroundColor = 'red';
squareColors[2].style.backgroundColor = 'yellow';
squareColors[3].style.backgroundColor = 'green';
