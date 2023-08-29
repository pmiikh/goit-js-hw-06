const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fragment = document.createDocumentFragment()

const ingredientsElements = ingredients.forEach(function (ingredient) {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = ingredient; 
  fragment.appendChild(newLi);
 
})
 const currentUl = document.getElementById('ingredients')
  
currentUl.appendChild(fragment);