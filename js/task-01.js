
const categories = document.querySelectorAll('.item');

const NumberOfCategories = categories.length;
console.log(`Number of categories: ${NumberOfCategories}`);

categories.forEach(function (category){
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})


// for (let category of categories) {
//     console.log(`Category: ${category.firstElementChild.textContent}`);
//     console.log(`Elements: ${category.lastElementChild.children.length}`)
// }

