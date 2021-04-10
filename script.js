const palette = ['black', 'red', 'blue', 'yellow'];
const color = document.querySelectorAll('.color');

for (let i = 0; i < color.length; i += 1) {
  color[i].style.backgroundColor = palette[i];
}
