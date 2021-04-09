window.onload = function() {
 	boardGenerator(5);
};

var actualMouseColor = "Black"
const colorPallete = document.getElementById("color-palette")
const pixelBoard = document.getElementById("pixel-board")
const palleteColors = document.getElementsByClassName("color");
const pixels = document.getElementsByClassName("pixel")
const button = document.getElementById("clear-board")
const createBoardButton = document.querySelector("#generate-board");
const inputValue = (document.querySelector("input").value);


function boardGenerator(value){
	// pixelBoard.style.width = ((value * 42)) + "px";
	// pixelBoard.style.height = ((value * 40) + 26) + "px";
	if(isNaN(value)){
		window.alert("Board inválido!");
		return false
	}else if(value > 50){
		value = 50;
	}else if(value < 5){
		value = 5;
	}


	const pixelQuant = pixels.length
	const br = document.getElementsByTagName("br");
	const brQuant = br.length;

	for(let index = 0; index < pixelQuant; index += 1){
		pixelBoard.removeChild(pixels[0])
	}
	
	for(let index = 0; index < brQuant; index += 1){
		pixelBoard.removeChild(br[0])
	}

	for(let index = 0; index < value*value; index += 1){
		if(index > 1 && index % value === 0){
			const brNew = document.createElement("br");
			pixelBoard.appendChild(brNew);
		}
		const pixel = document.createElement("div");
		pixel.className = "pixel"
		pixelBoard.appendChild(pixel);
	}
}

createBoardButton.addEventListener("click", function(){
	const inputValue = parseInt(document.querySelector("input").value);
	boardGenerator(inputValue);
})

function colorPalletDefinition(){
	for(let index = 0; index < palleteColors.length; index += 1){
		if(index === 0){
			palleteColors[index].style.backgroundColor = "black"
		}else{
				const randomColor = Math.ceil(Math.random()*16777214).toString(16);
				palleteColors[index].style.backgroundColor = "#" + randomColor;
		}
	}
}

colorPalletDefinition();

function getColor(element){
	const pencil = element.target;
	const color = getComputedStyle(pencil).backgroundColor
	if(pencil.parentNode === colorPallete){
		actualMouseColor = color;
		const actualSelected = document.querySelector(".selected");
		actualSelected.classList.remove("selected");
		pencil.classList.add("selected");
	}
};

addEventListener("click", getColor);

function paint(element){
	const paintedBlock = element.target;
	if(paintedBlock.parentNode === pixelBoard){
		if(actualMouseColor === paintedBlock.style.backgroundColor){
			paintedBlock.style.backgroundColor = "white";
		}else if(actualMouseColor !== ""){
			paintedBlock.style.backgroundColor = actualMouseColor;
		}
		
	}
}

addEventListener("click", paint);

function clearBoard(){
	for(let index = 0; index < pixels.length; index += 1){
		pixels[index].style.backgroundColor = "white";
	}
} 

button.addEventListener("click", clearBoard);

