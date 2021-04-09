// Requisito 3 - Criação da cor de paleta preta na primeira posição
function addBlackColor () {
	let listPallete = document.getElementById('color-palette');
	let blackColor = document.createElement('div');
	blackColor.className = 'color';
	blackColor.style.backgroundColor = 'black';
	listPallete.appendChild(blackColor);
	// Colocando o preto na primeira posição
	listPallete.insertBefore(blackColor, listPallete.childNodes[0])
}
addBlackColor();

