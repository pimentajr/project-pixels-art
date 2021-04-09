function titlePalet() {
    let getBody = document.querySelector('body')
    let title = document.createElement('h1')
    title.id = 'title'
    title.innerHTML = 'Paleta de Cores'
    getBody.appendChild(title)

} 
titlePalet()