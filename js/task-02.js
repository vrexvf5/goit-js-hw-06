const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
  
const makeIngredientsList = items => {
  return items.map(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem;
  });
};

const ingredientsList = makeIngredientsList(ingredients);

ingredientsEl.append(...ingredientsList);