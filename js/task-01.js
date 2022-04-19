
const categories = document.querySelectorAll('.item');

const NumberOfCategories = categories.length;
console.log(`Number of categories: ${NumberOfCategories}`);

for (let category of categories) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`) 
}