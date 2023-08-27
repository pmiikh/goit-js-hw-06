const input = document.querySelector('#validation-input');
const length = parseInt(input.dataset.length);


function handler(event) {
    if (event.currentTarget.value.length === length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
   
    } else if (event.currentTarget.value.length > length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    else {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    }
}

input.addEventListener('input', handler);
