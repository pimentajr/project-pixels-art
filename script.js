const liColors = document.getElementsByClassName('color');

const colors = ['black', 'red', 'green', 'blue'];

function makeLiColors(param) {
  const liProperties = param;
  for (let index = 0; index < liColors.length; index += 1) {
    liProperties[index].style.backgroundColor = colors[index];
    liProperties[index].innerText = colors[index];
    liProperties[index].style.border = '1px solid black';
  }
}

makeLiColors(liColors);
