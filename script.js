const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'green', 'blue'];

for (let index = 0; index < colorPalette.children.length; index += 1) {
  colorPalette.children[index].innerHTML = colors[index];
  colorPalette.children[index].style.backgroundColor = colors[index];
  colorPalette.children[index].style.color = colors[index];
}
