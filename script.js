// 2 -
function creatingPalette() {	
	for (let index = 0; index < 4; index += 1) {		
		let colorDiv = document.createElement('div');
		document.getElementById('color-palette').appendChild(colorDiv);		
		colorDiv.classList.add('color');
	}	
};

creatingPalette();

// 3 -
// document.querySelector('.color').style.backgroundColor = 'black';

// 4 - 
function creatingBoard(size = 5) {			
	for (let index = 1; index <= size; index += 1) {
		const newDiv = document.createElement('div');
		for (let j = 1; j <= size; j += 1) {
			const newPixel = document.createElement('div');			
			newPixel.classList.add('pixel');
			document.getElementById('pixel-board').appendChild(newDiv);
			newDiv.appendChild(newPixel);			
		}
	}
};

creatingBoard();

// 5 -
const newBorder = document.getElementById('color-palette').nextElementSibling;
newBorder.classList.add('border-pixel');

// 6 - 
let firstSelected = document.getElementById('color-palette').firstElementChild;
firstSelected.classList.add('selected');

// 7
document.getElementById('color-palette').addEventListener('click', function(event) {
	let whosSelected = document.querySelector('.selected');
	if (event.target !== whosSelected) {				
		whosSelected.classList.remove('selected');
		event.target.classList.add('selected');		
	}	
});	


// 8 - 
document.getElementById('pixel-board').addEventListener('click', function(event) {
	let color = document.querySelector('.selected').style.backgroundColor;
	console.log(color);
	if (event.target.style.backgroundColor !== String(color)) {	
		event.target.style.backgroundColor = String(color);
		console.log(event.target);
	}	
});


// 9 -
let button = document.getElementById('clear-board');
button.addEventListener('click', function(event) {
	let allPixels = document.querySelectorAll('.pixel');
	if (button = event) {
		for (let index = 0; index < allPixels.length; index += 1) {
			allPixels[index].style.backgroundColor = 'white';
		}
	}	
});

// 10 - Usada essa thread no stackoverflow para funcionalidade da remoção dos pixels:
// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

document.querySelector('#generate-board').addEventListener('click', userPixelBoard);

function userPixelBoard() {	
	let userBoard = document.querySelector('#board-size').value;		
	let currentBoard = document.getElementById('pixel-board');
	if (userBoard > 0 && userBoard < 5) {
		while (currentBoard.firstChild) {		
		currentBoard.removeChild(currentBoard.lastChild);
	}
	creatingBoard();	
	} else if (userBoard > 50) {
		while (currentBoard.firstChild) {
		currentBoard.removeChild(currentBoard.lastChild);
	}
	creatingBoard(50);
	} else {
		while (currentBoard.firstChild) {
		currentBoard.removeChild(currentBoard.lastChild);
		}
		creatingBoard(userBoard);
	}
	return alert('Board inválido!');
}


// 11 - feito no 10

// 12 - 
function randomColors() {
	let palette = document.querySelectorAll('.color')
	for (let index = 0; index < palette.length; index += 1) {		
		let newColor = '#'+Math.floor(Math.random()*16777215).toString(16);			
		if (palette[0].style.backgroundColor !== '#000000') {
			palette[0].style.backgroundColor = '#000000';
		}
		palette[index].style.backgroundColor = newColor;
	}	
}

randomColors();