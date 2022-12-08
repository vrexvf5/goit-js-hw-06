const categoryListEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoryListEl.children.length}`);

const categoryTitleEl = document.querySelectorAll('#categories h2');

console.log(`Category: `, categoryTitleEl[0].textContent);
console.log(`Elements: `,categoryListEl.firstElementChild.lastElementChild.children.length);

console.log(`Category: `, categoryTitleEl[1].textContent);
console.log(`Elements: `, categoryListEl.firstElementChild.nextElementSibling.lastElementChild.children.length);

console.log(`Category: `, categoryTitleEl[2].textContent);
console.log(`Elements: `, categoryListEl.lastElementChild.lastElementChild.children.length);