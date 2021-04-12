// 2 -
function coloringPalette() {	
	const palette = document.getElementsByClassName('color');	
	for (let color = 0; color < palette.length; color += 1) {				
		palette[color].style.backgroundColor = palette[color].innerText;
		palette[color].style.color = palette[color].innerText;
	}
};	

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


// 5 -
const newBorder = document.getElementById('color-palette').nextElementSibling;
newBorder.classList.add('border-pixel');

// 6 - 
const pixelBlack = document.querySelector('.color');
pixelBlack.classList.add('selected');

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
	let color = document.querySelector('.selected').innerText;	
	if (event.target.backgroundColor !== color){	
		event.target.style.backgroundColor = color;
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




coloringPalette();
creatingBoard();