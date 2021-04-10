const DEFAULT_TABLE_VALUE = 5;
const DEFAULT_COLOR = 'white';
const createrElements = (elem) => {
  document.createElement(elem);
}

const pixelsTable = document.querySelector('#lines-columns');
console.log(pixelsTable)
window.onload = () => {
  pixelsTable.appendChild(createrElements('tr'));

  console.log(pixelsTable)
}