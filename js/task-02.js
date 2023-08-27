const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElements = ingredients.forEach(function (ingredient) {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient; 

  const currentUl = document.getElementById('ingredients')
  currentUl.append(newLi);
})
