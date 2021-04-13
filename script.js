let linhas = [];
linhas = document.getElementsByClassName('pixel');
function start() {
  for (let i = 0; i < linhas.length; i += 1) {
		linhas[i].style.backgroundColor = 'white';
	}
}
window.onload = start;
