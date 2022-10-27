const handelSizeInput = document.querySelector("#font-size-control");
const handelSizeSpan = document.querySelector("#text");
handelSizeInput.addEventListener("input", (even) => {
  handelSizeSpan.style.fontSize = `${even.target.value}px`;
});
