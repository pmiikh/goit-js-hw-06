const input = document.querySelector('#name-input');
const greedingName = document.querySelector('#name-output');

// function changeName(event) {

//     greedingName.textContent = event.currentTarget.value;
// }

input.addEventListener('input', event => {
    greedingName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') greedingName.textContent = 'Anonymous';
});

