function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


const boxes = document.querySelector('#boxes');

const fragment = document.createDocumentFragment();

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++){
    let color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    fragment.appendChild(box);
    size += 10;
  }
    boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => { createBoxes(input.value) });
destroyBtn.addEventListener('click', destroyBoxes);

