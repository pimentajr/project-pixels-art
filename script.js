    
    let black = document.getElementsByClassName("color")[0].style.backgroundColor = "black"

    let red = document.getElementsByClassName("color")[1].style.backgroundColor="red"

    let green = document.getElementsByClassName("color")[2].style.backgroundColor="green"

    let purple = document.getElementsByClassName("color")[3].style.backgroundColor="purple"

    let pixelTable = document.getElementById('pixel-board')

    for (let i = 0;  i < 5; i += 1) {
        let blockRow = document.createElement('div')
        blockRow.className = 'pixel-row'
        pixelTable.appendChild(blockRow)
    
    
    for (let j =0; j < 5; j +=1) {
        let blockCell = document.createElement('div')
        blockCell.className = 'pixel'
        blockRow.appendChild(blockCell)
        blockCell.style.backgroundColor = 'white'
        
    }
    
}

function blackSelector(){
    let black = document.getElementsByClassName("color")[0].classList.add("selected")

}

window.onload = function() { blackSelector() }