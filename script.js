let linhas = [];
linhas = document.getElementsByClassName('pixel');
let selected;

function selecionar () {
	let palette = document.getElementById('tr-palette')
	palette.addEventListener('click', function(event) {
		let ex = selected;
		ex.classList.remove('selected');
		selected = event.target;
		selected.classList.add('selected');
	});
}

function pintar () {
	let quadro = document.getElementsByClassName('tr-board')
	let pixel;

	for (let index = 0; index < quadro.length; index += 1) {
		quadro[index].addEventListener('click', function(event) {
			cor = selected; 	// ou: cor = document.querySelector('.selected');
			pixel = event.target;
			let pixelStyle = getComputedStyle(pixel);
			let corStyle = getComputedStyle(selected);
			pixel.style.backgroundColor = corStyle.backgroundColor;
		});
	}
}

function limpar () {
	let botao = document.getElementById('clear-board');

	botao.addEventListener('click', function (event) {
		for (let i = 0; i < linhas.length; i += 1) {
			linhas[i].style.backgroundColor = 'white';
		}
	})
}


function start() {
  for (let i = 0; i < linhas.length; i += 1) {
		linhas[i].style.backgroundColor = 'white';
	}
	let corBlack = document.querySelector('.color');
	corBlack.style.backgroundColor = 'black';
	corBlack.classList.add('selected'); // classlist / add() Stackoverflow: https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro
	selected = corBlack;
	selecionar();
	pintar();
	limpar();
}

window.onload = start;
