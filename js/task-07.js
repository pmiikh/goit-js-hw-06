const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');   

console.log(text.style.fontSize);
    
function handler(event) {
    let value = event.currentTarget.value;
    text.style.fontSize = value + 'px';
}

input.addEventListener('input', handler);