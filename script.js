const getBody = document.body;
const makeTable = document.createElement('table');
getBody.appendChild(makeTable);
makeTable.id = 'pixel-board';

for (let index = 0; index < 5; index += 1) {
  const makeTr = document.createElement('tr');
  makeTable.appendChild(makeTr);
  for (let jndex = 0; jndex < 5; jndex += 1) {
    const makeTd = document.createElement('td');
    makeTr.appendChild(makeTd);
    makeTd.className = 'pixel branco';
  }
}
// npm run lint
// npm run lint:styles
