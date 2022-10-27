const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
const inputAnonymous = document.querySelector(
  '#name-input[placeholder="Please enter your name"]'
);
input.addEventListener("input", (event) => {
  if (inputAnonymous.value !== "") {
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
});
