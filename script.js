window.onload = function() {
	//Seleciona a cor preta como inicial:
	
	function createBoard(boardTable) {
		let board = boardTable;
		for (let boardRow = 0; boardRow < 5; boardRow += 1){
			let row = document.createElement('tr');
			board.appendChild(row);
			for (let boardColumn = 0; boardColumn < 5; boardColumn += 1){
				let cell = document.createElement('td');
				let content = document.createTextNode('');
				cell.className = ('pixel');
				row.appendChild(cell);
			}
		}
	}
	document.getElementById('black').classList.add('selected');

	createBoard(document.getElementById('pixel-board'));

	
}
