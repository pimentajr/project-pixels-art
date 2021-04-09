// PARTE 2 - A FAZER
function coloringPalette() {	
	palette = document.getElementsByClassName('color');
	for (let color in palette) {
		if (palette[color].style.backgroundColor === '') {
			palette[color].style.backgroundColor = String(palette[color].innerText);
			palette[color].style.color = String(palette[color].innerText);
		}
	}
}

coloringPalette();

document.querySelector('.color').style.backgroundColor = 'black';