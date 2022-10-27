const colCategories = document.querySelectorAll(".item");
const colElements = document.querySelectorAll("h2");
const colList = document.querySelectorAll(".item ul");
console.log(`Number of categories: ${colCategories.length}`);
for (let i = 0; i < colCategories.length; i++) {
  console.log(`Category: ${colElements[i].textContent}`);
  console.log(`Elements: ${colList[i].children.length}`);
}
