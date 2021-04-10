// 1 - Adicione à página o título "Paleta de Cores":

  const tagH1 = document.createElement('h1');
  tagH1.innerText = 'Paleta de Cores';
  document.body.appendChild(tagH1);

  const idTitle = document.querySelector('h1');
  idTitle.id = 'title';

  // 2 - Adicione à página uma paleta de quatro cores distintas:

  // A paleta de cores deve ser um elemento com id denominado color-palette: 

  function divs(tag, id) {
    const element = document.createElement(tag);
    element.id = id;
    document.body.appendChild(element);
  }
  divs('div', 'color-palette');

  // Ao passo que cada cor individual da paleta de cores deve possuir a classe color:

  function classes(tag, classes) {
    const element2 = document.createElement(tag);
    element2.className = classes;
    const element3 = document.querySelector('#color-palette');
    element3.appendChild(element2);
  }
  classes('div', 'black color');
  classes('div', 'turquoise color');
  classes('div', 'purple color');
  classes('div', 'darkorange color');
