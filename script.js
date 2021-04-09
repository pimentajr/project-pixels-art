const getPixels = document.getElementsByTagName('td');
for (let index = 0; index < getPixels.length; index += 1) {
  getPixels[index].className = 'pixel';
}
