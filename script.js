function createSquares() {
const elemento = document.querySelectorAll('.color');
	elemento[0].style.backgroundColor = 'black';
	elemento[1].style.backgroundColor = 'yellow';
	elemento[2].style.backgroundColor = 'blue';
	elemento[3].style.backgroundColor = 'orange';
}
createSquares();

function createTable() {
	const tableLine = document.querySelectorAll('tr');
	for (let linha = 0; linha < 5; linha += 1) {
		for (let coluna = 0; coluna < 5; coluna += 1) {
			const elementsQ = document.createElement('td');
			elementsQ.classList.add('pixel');
		tableLine[linha].appendChild(elementsQ);
 }
}
}
createTable();

function colorSelection() {
  const elemento = document.querySelectorAll('.color');
  elemento[0].classList.add('selected');
}
colorSelection();