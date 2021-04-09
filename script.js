window.onload = function() {
  selectColors();

  function selectColors() {
    let colors = ['black', 'blue', 'red', 'yellow', 'green'];
    let paletlist = document.getElementsByClassName('color');
    for (let index = 0; index < paletlist.length; index += 1) {
      paletlist[index].style.backgroundColor = colors[index];
    }
  }
}