function createSquares() {
const elemento = document.querySelectorAll('.color');
	elemento[0].style.backgroundColor = 'black';
	elemento[1].style.backgroundColor = 'yellow';
	elemento[2].style.backgroundColor = 'blue';
	elemento[3].style.backgroundColor = 'orange';
}
createSquares();

function createTable() {
	const quadro = document.querySelector('#pixel-board');
	for (let index = 0; index < 11; index += 1) {
		const elementsQ = document.createElement('div');
		elementsQ.classList.add('pixel');
		quadro.appendChild(elementsQ);
}
}
createTable();