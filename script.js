window.onload = function start() {
  document.getElementById('color-palette');
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';

  function randomBgCcolor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x}, ${y}, ${z})`;
    return bgColor;
  }

  document.getElementsByClassName('color')[1].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[2].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[3].style.backgroundColor = randomBgCcolor();
};
