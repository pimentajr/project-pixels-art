const COLOR_PALETTE = document.querySelector('#color-palette');
const COLOR_PALETTE_CHILDREN = [...COLOR_PALETTE.children];
const PIXEL_BOARD = document.querySelector('#pixel-board');
const PIXEL_BOARD_CHILDREN = [...PIXEL_BOARD.children];
const CLEAR_BUTTON = document.querySelector('#clear-board');
const BOARD_SIZE_INPUT = document.querySelector('#board-size');
const GENERATE_BOARD_BUTTON = document.querySelector('#generate-board');
const DEFAULT_COLOR = 'black';
let selectedColor = null;

console.log(PIXEL_BOARD_CHILDREN.length);

function generateBoard() {
  if (!BOARD_SIZE_INPUT.value) {
    alert('Board inválido!');
  } else {
    const SIZE = BOARD_SIZE_INPUT.value;
    const BOARD_SIZE_FORMULA = SIZE * SIZE - PIXEL_BOARD_CHILDREN.length;
    PIXEL_BOARD.style.gridTemplateColumns = `repeat(${SIZE}, 40px)`;
    PIXEL_BOARD.style.gridTemplateRows = `repeat(${SIZE}, 40px)`;
    for (let index = 0; index < BOARD_SIZE_FORMULA; index += 1) {
      const PIXEL = document.createElement('div');
      PIXEL.classList.add('pixel');
      PIXEL_BOARD.appendChild(PIXEL);
    }
  }
  console.log(PIXEL_BOARD_CHILDREN.length);
}

GENERATE_BOARD_BUTTON.addEventListener('click', generateBoard);

function generateRandomColor() {
  const RANDOM_COLOR = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return RANDOM_COLOR;
}

window.onload = () => {
  COLOR_PALETTE_CHILDREN.forEach((child) => {
    const PALETTE_CHILD = child;
    PALETTE_CHILD.style.backgroundColor = generateRandomColor();
  });
  COLOR_PALETTE_CHILDREN[0].style.backgroundColor = DEFAULT_COLOR;
};

function updateSelectedElement(e) {
  COLOR_PALETTE_CHILDREN.forEach((child) => {
    child.classList.remove('selected');
  });
  e.target.classList.add('selected');
}

function clearBoard() {
  PIXEL_BOARD_CHILDREN.forEach((child) => {
    const BOARD_PIXEL = child;
    const DEFAULT_PIXEL_COLOR = 'white';
    BOARD_PIXEL.style.backgroundColor = DEFAULT_PIXEL_COLOR;
  });
}

CLEAR_BUTTON.addEventListener('click', clearBoard);

COLOR_PALETTE.addEventListener('mousedown', (e) => {
  const ELEMENT = e.target;
  selectedColor = getComputedStyle(ELEMENT).getPropertyValue(
    'background-color',
  );
  updateSelectedElement(e);
});

PIXEL_BOARD.addEventListener('click', (e) => {
  e.target.style.backgroundColor = selectedColor || DEFAULT_COLOR;
});
