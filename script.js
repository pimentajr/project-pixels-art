// 2 -
function coloringPalette() {	
	let palette = document.getElementsByClassName('color');	
	for (let color = 0; color < palette.length; color += 1) {				
		palette[color].style.backgroundColor = palette[color].innerText;
		palette[color].style.color = palette[color].innerText;
	}
};	

// 3 -
// document.querySelector('.color').style.backgroundColor = 'black';

// 4 - 
function creatingBoard() {		
	for (let index = 1; index <= 5; index += 1) {
		let newDiv = document.createElement('div');
		for (j = 1; j <= 5; j += 1) {
			let newPixel = document.createElement('div');			
			newPixel.classList.add('pixel');
			document.getElementById('pixel-board').appendChild(newDiv);
			newDiv.appendChild(newPixel);			
		}
	}
};


// 5 -
let newBorder = document.getElementById('color-palette').nextElementSibling;
newBorder.classList.add('border-pixel');

// 6 - 
let pixelBlack = document.querySelector('.color');
pixelBlack.classList.add('selected')

// 7
document.getElementById('color-palette').addEventListener('click', selection);

function selection () {
	let whosSelected = document.querySelector('.selected');
	if (event.target !== whosSelected) {				
		whosSelected.classList.remove('selected');
		event.target.classList.add('selected');		
	}		
};


// 8 - 
document.getElementById('pixel-board').addEventListener('click', fillingPixels);

function fillingPixels() {
	let color = document.querySelector('.selected').innerText;	
	if (event.target.backgroundColor !== color){	
		event.target.style.backgroundColor = color;
	}	
};


// 9 -
let button = document.getElementById('clear-board');
button.addEventListener('click', clearButton);

function clearButton(){
	let allPixels = document.querySelectorAll('.pixel');
	if (button = event) {
		for (let index = 0; index < allPixels.length; index += 1) {
			allPixels[index].style.backgroundColor = 'white';
		}
	}		
};



coloringPalette();
creatingBoard();
selection();
fillingPixels();
clearButton();