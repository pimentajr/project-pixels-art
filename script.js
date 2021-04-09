let firstSelectedColor = document.getElementById('black-box');
firstSelectedColor.classList = ('color selected');

function colorSelection() {
  let tableColor = document.querySelector("#color-palette");
  tableColor.addEventListener('click', function(event) {
    let actualColor = document.querySelector('.selected');
    actualColor.className = 'color';
    event.target.className = 'color selected';
  })
}
colorSelection()
