function createSquares() {
const elemento = document.querySelectorAll('.color');
	elemento[0].style.backgroundColor = 'black';
	elemento[1].style.backgroundColor = 'yellow';
	elemento[2].style.backgroundColor = 'blue';
	elemento[3].style.backgroundColor = 'orange';
}
createSquares();

function createTable() {
	const linha = document.querySelector('tr');
	for (let index = 0; index < 5; index += 1) {
		const elementsQ = document.createElement('td');
		elementsQ.classList.add('pixel');
		linha.appendChild(elementsQ);
}
}
createTable();