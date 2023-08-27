function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++){
    let color = getRandomHexColor();
    boxes.innerHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => { createBoxes(input.value) });
destroyBtn.addEventListener('click', destroyBoxes);

