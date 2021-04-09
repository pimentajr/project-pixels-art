window.onload = function () {
  const titulo = document.getElementById('title');
  titulo.innerText = 'Paleta de Cores';

  const divColors = document.querySelectorAll('.color');

  function paleteColors () {
    for (let index = 0; index < divColors.length; index += 1) {
      const colorsValue = divColors[index].id;
      divColors[index].style.backgroundColor = colorsValue;
    }
  }
  paleteColors();
};
