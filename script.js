function createDiv(number) {
  for (let index = 0; index < number; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'pixels';
    document.getElementById('pixel-board').appendChild(createdDiv);
  }
}
createDiv(25);
