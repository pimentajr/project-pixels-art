let board = document.querySelector('#pixel-board')
let x = 5
let y = 5

for (let index = 0; index < x * y; index++) {
	let square = document.createElement('div')
	square.style.backgroundColor = 'white'
	square.className = 'pixel box'

	board.appendChild(square)
}