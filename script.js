let linhas = [];
linhas = document.getElementsByClassName('pixel');

function start() {
  for (let i = 0; i < linhas.length; i += 1) {
		linhas[i].style.backgroundColor = 'white';
	}

	let corBlack = document.querySelector('.color');
	corBlack.style.backgroundColor = 'black';
	corBlack.classList.add('selected'); // classlist / add() Stackoverflow: https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro
}

window.onload = start;


// tr-palette.addEventListener('click', function(event) {
	
// });
