

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const areaValue = document.querySelector('#value');

let counterValue = areaValue.textContent;


function handlerDecrement(event) {
    if (counter => 0) counterValue -= 1;
    areaValue.textContent = counterValue;
}
function handlerIncrement(event) {
    counter+= 1;
    areaValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', handlerDecrement);
incrementBtn.addEventListener('click', handlerIncrement);