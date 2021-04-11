const COLOR_PALETTE = document.querySelector('#color-palette');
const COLOR_PALETTE_CHILDREN = [...COLOR_PALETTE.children];
const PIXEL_BOARD = document.querySelector('#pixel-board');
const CLEAR_BUTTON = document.querySelector('#clear-board');
const BOARD_SIZE_INPUT = document.querySelector('#board-size');
const GENERATE_BOARD_BUTTON = document.querySelector('#generate-board');
const GRID_GAP_INPUT = document.querySelector('#gap-input');

GRID_GAP_INPUT.onclick = () => {
  if (GRID_GAP_INPUT.checked) {
    PIXEL_BOARD.style.gridGap = '1px';
  } else {
    PIXEL_BOARD.style.gridGap = '0';
  }
};

const DEFAULT_COLOR = 'black';
const DEFAULT_PIXEL_COLOR = 'white';
const DEFAULT_BOARD_SIZE = 25;
let selectedColor = null;
let lastInputSize = null;

function formatInvalidSize(value) {
  if (value < 5) return 5;
  if (value > 50) return 50;
  return value;
}

function mountBoardGrid(size) {
  const VALID_SIZE = formatInvalidSize(size);
  PIXEL_BOARD.style.gridTemplateColumns = `repeat(${VALID_SIZE}, 40px)`;
  PIXEL_BOARD.style.gridTemplateRows = `repeat(${VALID_SIZE}, 40px)`;
  PIXEL_BOARD.innerHTML = '<div class=\'pixel\'></div>'.repeat(VALID_SIZE * VALID_SIZE);
}

function mountBoard() {
  if (!BOARD_SIZE_INPUT.value) {
    alert('Board inválido!');
  } else {
    const size = BOARD_SIZE_INPUT.value;
    if (lastInputSize !== size * size) {
      mountBoardGrid(size);
      lastInputSize = size * size;
    }
  }
}

function generateRandomColor() {
  const RANDOM_COLOR = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return RANDOM_COLOR;
}

function updateSelectedElement(e) {
  COLOR_PALETTE_CHILDREN.forEach((child) => {
    child.classList.remove('selected');
  });
  e.target.classList.add('selected');
}

function clearBoard() {
  for (let child = 0; child < PIXEL_BOARD.children.length; child += 1) {
    // apply the animation for every PIXEL_BOARD child while also applying a delay
    PIXEL_BOARD.children[child].style.animation = `spin .5s ${child * 10}ms linear`;
    PIXEL_BOARD.children[child].style.backgroundColor = DEFAULT_PIXEL_COLOR;
    PIXEL_BOARD.children[child].onanimationend = () => {
      PIXEL_BOARD.children[child].style.animation = '';
    };
  }
  // still working to better the animation formula
  // and prevent the user from firing the clearBoard function
  // while the PIXEL_BOARD's last child haven't finished its animation
}

function checkEventOrigin(e) {
  // prevents the event from firing on parent element
  if (e.target !== this) e.target.style.backgroundColor = selectedColor || DEFAULT_COLOR;
}

GENERATE_BOARD_BUTTON.addEventListener('click', mountBoard);
CLEAR_BUTTON.addEventListener('click', clearBoard);
PIXEL_BOARD.addEventListener('mousedown', checkEventOrigin);

COLOR_PALETTE.addEventListener('mousedown', (e) => {
  const ELEMENT = e.target;
  selectedColor = getComputedStyle(ELEMENT).getPropertyValue(
    'background-color',
  );
  updateSelectedElement(e);
});

function mountDefaultBoard() {
  // Ain't nobody got time for the for loop verbose syntax lmao
  PIXEL_BOARD.innerHTML = '<div class=\'pixel\'></div>'.repeat(DEFAULT_BOARD_SIZE);
}

window.onload = () => {
  COLOR_PALETTE_CHILDREN.forEach((child) => {
    const PALETTE_CHILD = child;
    PALETTE_CHILD.style.backgroundColor = generateRandomColor();
  });
  COLOR_PALETTE_CHILDREN[0].style.backgroundColor = DEFAULT_COLOR;
  mountDefaultBoard();
};
