const colorPallet = document.querySelector('body');

function createColor(array) {
  for (let i = 0; i < array.length; i += 1) {
    const color = document.createElement('div');
    color.id = 'color-palette';
    color.className = 'color';
    color.style.backgroundColor = array[i];
    colorPallet.appendChild(color);
  }
}
createColor(['red', 'black', 'blue', 'green']);
