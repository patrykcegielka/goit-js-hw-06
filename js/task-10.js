function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById('boxes');
const inputEl = document.querySelector('[type="number"]');

let boxesNum = '';

const createButton = document.querySelector('#controls > button:nth-child(2)');
const destroyButton = document.querySelector('#controls > button:nth-child(3)');

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    element.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(element);
    width += 10;
    height += 10;
  }
}
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
inputEl.addEventListener('input', (event) => { boxesNum = Number.parseInt(event.target.value) });

createButton.addEventListener('click', (event) => {
  createBoxes(boxesNum)
});
destroyButton.addEventListener('click', destroyBoxes);