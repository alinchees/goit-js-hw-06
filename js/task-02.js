const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newIngredients = document.querySelector("#ingredients");
function addIngredients(name) {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = String(name);
  newIngredients.append(list);
  return list;
}
const s = ingredients.map((el) => addIngredients(el));
