var actualMouseColor = "Black"
const colorPallete = document.getElementById("color-pallete")
const pixelBoard = document.getElementById("pixel-board")
const palleteColors = document.getElementsByClassName("color");

for(let index = 0; index < palleteColors.length; index += 1){
	if(index === 0){
		palleteColors[index].style.backgroundColor = "black"
	}else{
		const randomColor = Math.floor(Math.random()*16777215).toString(16);
	
		palleteColors[index].style.backgroundColor = "#" + randomColor;
	}
	}

function getColor(element){
	const pencil = element.target;
	const color = getComputedStyle(pencil).backgroundColor
	if(pencil.parentNode === colorPallete){
		actualMouseColor = color;
		const actualSelected = document.querySelector(".selected");
		actualSelected.classList.remove("selected")
		pencil.classList.add("selected")
	}
};

addEventListener("click", getColor);

function paint(element){
	const paintedBlock = element.target;
	if(paintedBlock.parentNode === pixelBoard){
		if(actualMouseColor !== ""){
			paintedBlock.style.backgroundColor = actualMouseColor;
		}
	}
}

addEventListener("click", paint);