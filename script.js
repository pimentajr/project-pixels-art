window.onload = function() {

  let boardSection = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let everyRow = document.createElement('div');
    everyRow.setAttribute('class', 'boardRow');
    boardSection.appendChild(everyRow);
    for (let index = 0; index < 5; index += 1) {
        let everyPixel = document.createElement('div');
        everyPixel.setAttribute('class', 'pixel');
        everyRow.appendChild(everyPixel);
    }
  }


}