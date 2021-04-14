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
	let cor;
	
	quadro[0].addEventListener('click', function(event) {
		// cor = document.querySelector('.selected');
		cor = selected;
		pixel = event.target;
		let corStyle = getComputedStyle(cor);
		let pixelStyle = getComputedStyle(pixel);
		console.log('Classe da cor escolhida: '+ cor.classList)
		
		console.log('Cor escolhida: ' + corStyle.backgroundColor);
		// console.log('Cor do pixel: ' + event.target.style.backgroundColor);
		// console.log('Cor do pixel: ' + pixel.style.backgroundColor);
			console.log('Cor do pixel: ' + pixelStyle.backgroundColor);
		pixel.style.backgroundColor = corStyle.backgroundColor;
	});
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
}



window.onload = start;
