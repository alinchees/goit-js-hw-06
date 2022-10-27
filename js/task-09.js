function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handelBtnColor = document.querySelector(".change-color");
const handelSpunColor = document.querySelector(".color");
const handelBodyColor = document.querySelector("body");
handelBtnColor.addEventListener("click", () => {
  handelBodyColor.style.backgroundColor = getRandomHexColor();
  handelSpunColor.textContent = getRandomHexColor();
});
