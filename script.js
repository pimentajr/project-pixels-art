const palette = document.querySelector('#color-palette');

for (let i = 0; i < palette.childElementCount; i += 1) {
  palette.children[i].className = 'color';
}
