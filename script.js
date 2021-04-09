window.onload = function jsExec() {
  const initialColor = document.querySelector('#black');
  const bgColor = window.getComputedStyle(initialColor);
  const color = bgColor.getPropertyValue('background-color');
  console.log(color);
};
