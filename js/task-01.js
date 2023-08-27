const items = document.querySelectorAll('.item');

console.log(`Number of items: ${items.length}`);

items.forEach(function (item) {
    const heading = item.firstElementChild;
    
    const lastChild = item.lastElementChild;
    const num = lastChild.querySelectorAll('li');

    console.log(`Category: ${heading.textContent}\nElements: ${num.length}`);

})