function createDivBlockInline (number, local) {
    for(let index = 0; index < number; index += 1) {
        let createdDiv = document.createElement('div');
        createdDiv.className = "pixels";
        local.appendChild(createdDiv);
    }
}
let boardPixelLocate = document.getElementById("pixel-board");

function createDivBlockParent (number2, local2) {
    for(let index2 = 0; index2 < number2; index2 += 1) {
        let createdDiv2 = document.createElement('div');
        createdDiv2.className = "pixels pixel-parent";
        local2.appendChild(createdDiv2);
        let pixelBoardparent = document.querySelectorAll(".pixel-parent")[index2];
        createDivBlockInline(5, pixelBoardparent);
    }
}
createDivBlockParent(5, boardPixelLocate)
