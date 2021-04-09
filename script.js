function createPalletColorDiv(color) {
  const palletColorDiv = document.createElement('div');
  palletColorDiv.className = 'color';
  palletColorDiv.style.backgroundColor = color;
  document.querySelector('#color-pallete').appendChild(palletColorDiv);
}

createPalletColorDiv('black');
createPalletColorDiv('yellow');
createPalletColorDiv('red');
createPalletColorDiv('green');
