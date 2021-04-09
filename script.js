function colorPallet(color) {
  let spanPallet = document.createElement('span');
  let spanBlock = document.querySelector('#color-palette');
  spanPallet.className = 'color';
  spanBlock.appendChild(spanPallet);
  spanPallet.style.backgroundColor = color;
}
colorPallet('black')
colorPallet('red')
colorPallet('green')
colorPallet('blue')