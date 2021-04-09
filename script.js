function createColunnLines() {
    
    for (let index = 0; index < 5; index++) {
        let colunn = document.createElement('div');
        colunn.className = 'colunn'
        document.querySelector('#pixel-board').appendChild(colunn)
        let table = document.querySelectorAll('.colunn')

        for (let index = 0; index < 5; index++) {
            let lines = document.createElement('div');
            lines.className = 'pixel';
            colunn.appendChild(lines)
            
        }
    }

    
}createColunnLines()

/* function selected() {
    if
} */