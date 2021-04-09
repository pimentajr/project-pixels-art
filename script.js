window.onload = function (){

    let black = document.getElementById("black").style.backgroundColor = "black"
    let red = document.getElementById("red").style.backgroundColor="red"
    let green = document.getElementById("green").style.backgroundColor="green"
    let purple = document.getElementById("purple").style.backgroundColor="purple"

    let pixelTable = document.getElementById('pixel-board')

    for (let i = 0;  i < 5; i += 1) {
        let blockRow = document.createElement('div')
        blockRow.className = 'blockRow'
        pixelTable.appendChild(blockRow)
    
    
    for (let j =0; j < 5; j +=1) {
        let blockCell = document.createElement('div')
        blockCell.className = 'blockCell'
        blockRow.appendChild(blockCell)
        blockCell.style.backgroundColor = 'White'
        

    }
}
}