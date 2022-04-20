const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient){
  const itemsEl = document.createElement("li"); 
  itemsEl.textContent = `${ingredient}`;
  itemsEl.classList.add('item')
  ingredientsEl.append(itemsEl)
})


// for (const ingredient of ingredients) { 
//   const itemsEl = document.createElement("li"); 
//   itemsEl.textContent = `${ingredient}`;
//   itemsEl.classList.add('item')
//   const ingredientsEl = document.querySelector("#ingredients");
//   ingredientsEl.append(itemsEl)
// }








