const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');   

console.log(text.style.fontSize);
text.style.fontSize = input.value + 'px';
    
function handler(event) {
    let value = event.currentTarget.value;
    text.style.fontSize = value + 'px';
}

input.addEventListener('input', handler);