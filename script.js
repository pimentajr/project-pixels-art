let pixel = [];
const buttonClear = document.getElementById('botaoLimpar');
buttonClear.addEventListener('click', function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
