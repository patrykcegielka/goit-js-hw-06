function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById("boxes");
const inputEl = document.querySelector('[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
let size = 30;
function createBoxes() {
  for (let i = 0; i < inputEl.value; i++) {
    const element = document.createElement("div");
    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(element);
    size += 10;
  }
}
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  size = 30;
}
createButton.addEventListener("click", () => {
  createBoxes();
});
destroyButton.addEventListener("click", destroyBoxes);