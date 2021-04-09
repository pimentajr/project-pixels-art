window.onload = function() {
  let numberOfLines = 5;
  let numberOfBox = numberOfLines;

  const colorMenu = document.getElementById('color-palette');
  const colors = ['black', 'red', 'green', 'blue'];
  for (let index = 0; index < colors.length; index += 1) {
    const colorSelector = document.createElement('div');
    colorSelector.className = 'color';
    colorSelector.id = colors[index];
    colorSelector.style.backgroundColor = colors[index];
    colorMenu.appendChild(colorSelector);
  }

  const pixelBoard = document.getElementById('pixel-board');
  const boxsLine = document.getElementsByClassName('line');
  
  function fillBoard (value) {
    for (let index = 0; index < value; index += 1) {
      let lineBox = document.createElement('div');
      lineBox.className = "line";
      pixelBoard.appendChild(lineBox);
    }
    fillLine(numberOfBox);
  }

  function fillLine(value) {
    for (let index = 0; index < value; index += 1) {
      for (let boxIndex = 0; boxIndex < numberOfBox; boxIndex += 1) {
        let createdBox = document.createElement('div');
        createdBox.className = 'pixel';
        boxsLine[index].appendChild(createdBox);
      }
    }
  }
  // function boxCreator() {
  //   let createdBox = document.createElement('div');
  //   createdBox.className = 'pixel';
  // }
  fillBoard(numberOfLines);

};
