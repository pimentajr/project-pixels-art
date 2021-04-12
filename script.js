const getPixels = document.getElementsByTagName('td');
for (let index = 0; index < getPixels.length; index += 1) {
  getPixels[index].className = 'pixel';
}

window.onload = function () {
  const getColor = document.getElementById('cor1');
  getColor.className += ' selected';
};

function addClassSelected() {
  const paletaCores = document.querySelector('#color-palette');
  paletaCores.addEventListener('click', function (getEvt) {
    if (getEvt.target.className === 'color') {
      const newClass = document.querySelector('.selected');
      newClass.className = 'color';
      getEvt.target.className += ' selected';
    }
  });
}

addClassSelected();
