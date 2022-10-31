const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newIngredients = document.querySelector("#ingredients");
  for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = ingredients[i];
  newIngredients.append(list);
  }
