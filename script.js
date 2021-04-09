function createDivBlockInline (number) {
    for(let index = 0; index < number; index += 1) {
        let createdDiv = document.createElement('div');
        createdDiv.className = "pixels"
    }
}
function createDivBlock (numberBlock) {
    for(let index2 = 0; index2 < numberBlock; index2 += 1) {
       let divsIline = createDivBlockInline(5);
    }
}